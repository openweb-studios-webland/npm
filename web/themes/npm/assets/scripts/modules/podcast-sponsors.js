import debounce from '../utilities/debounce'
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
    this.params = {
      podcasts: 'podcasts',
      hasOffer: 'has-offer',
      keywords: 'keywords',
    }
    this.page = 1
    this.itemsPerPage = 15

    this.init()
  }

  init = () => {
    this.attachEventListeners()
    this.getSearchParams()
  }

  attachEventListeners = () => {
    this.resetTrigger.addEventListener('click', this.onReset)
    this.loadMoreTrigger.addEventListener('click', this.onLoadMore)
    this.podcastsInput.addEventListener('change', this.onPodcasts)
    this.hasOfferInput.addEventListener('change', this.onHasOffer)
    this.keywordsInput.addEventListener(
      'keyup',
      debounce(e => {
        this.onKeywords(e)
      }, 300)
    )
  }

  onPodcasts = e => {
    const value = e.target.value

    if (value && value !== '') {
      this.filters[this.params.podcasts] = value.toLowerCase()
    } else {
      delete this.filters[this.params.podcasts]
    }

    this.filterItems()
  }

  onHasOffer = e => {
    if (e.target.checked) {
      this.filters[this.params.hasOffer] = 1
    } else {
      delete this.filters[this.params.hasOffer]
    }

    this.filterItems()
  }

  onKeywords = e => {
    const value = e.target.value

    if (value && value !== '') {
      this.filters[this.params.keywords] = value.toLowerCase()
    } else {
      delete this.filters[this.params.keywords]
    }

    this.filterItems()
  }

  onReset = e => {
    this.filters = {}
    this.page = 1

    // Reset field values
    this.podcastsInput.selectedIndex = 0
    this.hasOfferInput.checked = false
    this.keywordsInput.value = ''

    this.filterItems()
    e.preventDefault()
  }

  onLoadMore = e => {
    this.page++

    this.filterItems()
    e.preventDefault()
  }

  filterItems = () => {
    this.toggleLoading(true)
    this.setSearchParams()
    Object.entries(this.filters).length > 0 ? this.filterItemsBySelectors() : this.filterItemsByLength()
    this.toggleLoading()
  }

  filterItemsByLength = () => {
    let itemsCount = 0

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      const itemParent = item.closest('[data-podcast-sponsors-item]')

      let activeItemParent = itemParent !== prevItemParent ? false : activeItemParent

      if (this.hasMoreItems(itemsCount)) {
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

    this.toggleAlert(itemsCount === 0)
    const showMore = this.hasMoreItems(itemsCount) || this.hasMoreItems(this.items.length)
    this.toggleLoadMore(showMore)
  }

  filterItemsBySelectors = selectors => {
    let itemsCount = 0

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      const itemParent = item.closest('[data-podcast-sponsors-item]')
      let activeItemParent = itemParent !== prevItemParent ? false : activeItemParent
      let visibleItemsCount = itemParent !== prevItemParent ? 0 : visibleItemsCount

      if (
        this.hasMoreItems(itemsCount) &&
        this.itemHasOffer(item) &&
        this.itemMatchesRegex(item, this.podcastsInput.value) &&
        this.itemMatchesRegex(item, this.keywordsInput.value)
      ) {
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

    this.toggleAlert(itemsCount === 0)
    this.toggleLoadMore(this.hasMoreItems(itemsCount))
  }

  hasMoreItems = itemsCount => {
    return itemsCount < this.page * this.itemsPerPage
  }

  itemMatchesRegex = (item, value = '') => {
    const regexp = new RegExp('\\b\\w*' + this.escapeRegexp(value) + '\\w*\\b', 'i')

    return regexp.test(item.dataset.podcastSponsorsKeywords)
  }

  escapeRegexp = string => {
    return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
  }

  itemHasOffer = item => {
    return this.hasOfferInput.checked ? item.dataset.podcastSponsorsHasOffer === 'yes' : true
  }

  updateItemsCount = (item, count) => {
    const el = item.querySelector('[data-podcast-sponsors-count]')

    el.innerHTML = count > 1 ? `${count} Codes` : `${count} Code`
  }

  getSearchParams = () => {
    const pathname = location.pathname
      .split('/')
      .slice(2, 3)
      .toString()

    if (pathname !== '') {
      this.filters[this.params.podcasts] = pathname.replace(/-/g, ' ')
    }

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
    const pathname = location.pathname
      .split('/')
      .slice(0, 2)
      .join('/')
    let url = `${location.protocol}//${location.host}${pathname}/`
    const filters = Object.entries(this.filters)

    // If filters are selected
    if (typeof this.filters === 'object' && filters.length > 0) {
      let params = ''
      let hasParams = false

      for (const [key, value] of filters) {
        if (key === 'podcasts') {
          url += `${slugify(value)}/`
        } else {
          const separator = hasParams ? '&' : '?'
          params += `${separator}${key}=${encodeURI(value)}`
          hasParams = true
        }
      }

      url += params
    }

    // Push to brwoser history
    history.pushState(null, null, url)
  }

  toggleLoadMore = (loadMore = false) => {
    loadMore
      ? this.loadMoreTrigger.parentNode.classList.add('hidden')
      : this.loadMoreTrigger.parentNode.classList.remove('hidden')
  }

  toggleAlert = (alert = false) => {
    if (alert) {
      this.alert.classList.remove('hidden')
      this.alert.innerHTML = "Sorry, we couldn't find any matching promo codes."
    } else {
      this.alert.classList.add('hidden')
    }
  }

  toggleLoading = (loading = false) => {
    loading ? this.loading.classList.remove('hidden') : this.loading.classList.add('hidden')
  }
}
