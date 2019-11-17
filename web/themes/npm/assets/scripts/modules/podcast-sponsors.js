import slugify from '../utilities/slugify'

export default class PodcastSponsors {
  constructor(el) {
    this.el = el
    this.items = [...this.el.querySelectorAll('[data-podcast-sponsors-keywords]')]
    this.podcastsInput = this.el.querySelector('[data-podcast-sponsors-podcasts-input]')
    this.hasOfferInput = this.el.querySelector('[data-podcast-sponsors-has-offer-input]')
    this.keywordsInput = this.el.querySelector('[data-podcast-sponsors-keywords-input]')
    this.resetTrigger = this.el.querySelector('[data-podcast-sponsors-reset-trigger]')
    this.loadMoreTrigger = this.el.querySelector('[data-podcast-sponsors-load-more-trigger]')
    this.alert = this.el.querySelector('[data-podcast-sponsors-alert]')
    this.loading = this.el.querySelector('[data-podcast-sponsors-loading]')
    this.filters = {}
    this.params = ['podcasts', 'has-offer', 'keywords']
    this.page = 1
    this.itemsPerPage = 15

    this.init()
  }

  init = () => {
    this.attachEventListeners()
    this.getSearchParams()
  }

  attachEventListeners = () => {
    this.podcastsInput.addEventListener('change', this.onPodcasts)
    this.hasOfferInput.addEventListener('change', this.onHasOffer)
    this.keywordsInput.addEventListener('keyup', this.onKeywords)
    this.resetTrigger.addEventListener('click', this.onReset)
    this.loadMoreTrigger.addEventListener('click', this.onLoadMore)
  }

  onPodcasts = e => {
    const value = e.target.value

    if (value && value !== '') {
      this.filters[this.params[0]] = e.target.value
    } else {
      delete this.filters[this.params[0]]
    }

    this.filterItems()
  }

  onHasOffer = e => {
    if (e.target.checked) {
      this.filters[this.params[1]] = 1
    } else {
      delete this.filters[this.params[1]]
    }

    this.filterItems()
  }

  onKeywords = e => {
    const value = e.target.value

    if (value && value !== '') {
      this.filters[this.params[2]] = e.target.value
    } else {
      delete this.filters[this.params[2]]
    }

    this.filterItems()
  }

  onReset = e => {
    this.filters = {}
    this.page = 1

    this.filterItems()

    e.preventDefault()
  }

  onLoadMore = e => {
    this.page++

    this.filterItems()

    e.preventDefault()
  }

  filterItems = () => {
    this.showLoading(true)

    // Build queryable selectors
    let querySelectors = []

    // Podcasts
    if (this.filters[this.params[0]]) {
      querySelectors.push(`[data-podcast-sponsors-keywords*="${this.filters[this.params[0]]}"]`)
    }

    // Has offers
    if (this.filters[this.params[1]]) {
      querySelectors.push('[data-podcast-sponsors-has-offer="yes"]')
    }

    // Keywords
    if (this.filters[this.params[2]]) {
      querySelectors.push(`[data-podcast-sponsors-keywords*="${this.filters[this.params[2]]}"]`)
    }

    this.setSearchParams()

    querySelectors.length > 0 ? this.filterItemsBySelectors(querySelectors) : this.filterItemsByLength()

    this.showLoading()
  }

  filterItemsByLength = () => {
    let itemsCount = 0

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      const itemParent = item.closest('[data-podcast-sponsors-item]')

      let activeItemParent = itemParent !== prevItemParent ? false : activeItemParent

      if (itemsCount < this.page * this.itemsPerPage) {
        item.classList.remove('hidden')

        // Update items count only once per item parent
        if (!activeItemParent) {
          activeItemParent = true
          itemsCount++
        }

        itemParent.classList.remove('hidden')
      } else {
        if (!activeItemParent) {
          item.classList.add('hidden')
          itemParent.classList.add('hidden')
        }
      }

      // Store previous item parent to account for siblings
      const prevItemParent = itemParent
    }

    if (itemsCount === 0) {
      this.showAlert(true)
    } else {
      this.showAlert()
    }

    itemsCount < this.page * this.itemsPerPage || this.items.length < this.page * this.itemsPerPage
      ? this.showLoadMore()
      : this.showLoadMore(true)
  }

  filterItemsBySelectors = selectors => {
    const items = [...this.el.querySelectorAll(`${selectors.join('')}`)]
    let itemsCount = 0

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      const itemParent = item.closest('[data-podcast-sponsors-item]')
      let activeItemParent = itemParent !== prevItemParent ? false : activeItemParent
      let visibleItemsCount = itemParent !== prevItemParent ? 0 : visibleItemsCount

      if (itemsCount < this.page * this.itemsPerPage && items.indexOf(item) > -1) {
        item.classList.remove('hidden')

        // Update items count only once per item parent
        if (!activeItemParent) {
          activeItemParent = true
          itemsCount++
        }

        itemParent.classList.remove('hidden')

        // Update visible items count
        visibleItemsCount++
        this.updateItemsCount(itemParent, visibleItemsCount)
      } else {
        item.classList.add('hidden')

        if (!activeItemParent) {
          itemParent.classList.add('hidden')
        }
      }

      // Store previous item parent to account for siblings
      const prevItemParent = itemParent
    }

    if (itemsCount === 0) {
      this.showAlert(true)
    } else {
      this.showAlert()
    }

    itemsCount < this.page * this.itemsPerPage ? this.showLoadMore() : this.showLoadMore(true)
  }

  updateItemsCount = (item, count) => {
    const el = item.querySelector('[data-podcast-sponsors-count]')

    el.innerHTML = count > 1 ? `${count} Codes` : `${count} Code`
  }

  getSearchParams = () => {
    let params = location.search

    if (params !== '') {
      params = params.substring(1)
      params = params.split('&')

      params.forEach(param => {
        param = param.split('=')
        this.filters[param[0]] = param[1].replace(/-/g, ' ')
      })
    }

    this.filterItems()
  }

  setSearchParams = () => {
    let url = location.protocol + '//' + location.host + location.pathname
    const filters = Object.entries(this.filters)

    // If filters are selected
    if (typeof this.filters === 'object' && filters.length > 0) {
      let hasParams = false

      for (const [key, value] of filters) {
        const separator = hasParams ? '&' : '?'
        hasParams = true
        url += `${separator}${key}=${slugify(value)}`
      }
    }

    // Push to brwoser history
    history.pushState(null, null, url)
  }

  showLoadMore = (loadMore = false) => {
    loadMore ? this.loadMoreTrigger.classList.remove('hidden') : this.loadMoreTrigger.classList.add('hidden')
  }

  showAlert = (alert = false) => {
    if (alert) {
      this.alert.classList.remove('hidden')
      this.alert.innerHTML = "Sorry, we couldn't find any matching promo codes."
    } else {
      this.alert.classList.add('hidden')
    }
  }

  showLoading = (loading = false) => {
    loading ? this.loading.classList.remove('hidden') : this.loading.classList.add('hidden')
  }
}
