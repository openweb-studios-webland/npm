import slugify from '../utilities/slugify'

export default class PodcastSponsors {
  constructor(el) {
    this.el = el
    this.items = [...this.el.querySelectorAll('[data-podcast-sponsors-keywords]')]
    this.select = this.el.querySelector('[data-podcast-sponsors-select]')
    this.checkbox = this.el.querySelector('[data-podcast-sponsors-checkbox]')
    this.search = this.el.querySelector('[data-podcast-sponsors-search]')
    this.loading = this.el.querySelector('[data-podcast-sponsors-loading]')
    this.params = ['podcasts', 'has-offer', 'keywords']
    this.filters = {}

    this.init()
  }

  init = () => {
    this.attachEventListeners()
    this.getSearchParams()
  }

  attachEventListeners = () => {
    this.select.addEventListener('change', this.onPodcasts)
    this.checkbox.addEventListener('change', this.onHasOffer)
    this.search.addEventListener('keyup', this.onKeywords)
  }

  onPodcasts = e => {
    const value = e.target.value

    if (value && value !== '') {
      this.filters[this.params[0]] = [e.target.value, this.select.options[this.select.selectedIndex].text]
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

  filterItems = () => {
    this.isLoading(true)

    let selectors = []

    if (this.filters[this.params[0]]) {
      const podcasts =
        typeof this.filters[this.params[0]] === 'object'
          ? this.filters[this.params[0]][0]
          : this.filters[this.params[0]]

      selectors.push(`[data-podcast-sponsors-keywords*="${podcasts}"]`)
    }

    if (this.filters[this.params[1]]) {
      selectors.push('[data-podcast-sponsors-has-offer="yes"]')
    }

    if (this.filters[this.params[2]]) {
      selectors.push(`[data-podcast-sponsors-keywords*="${this.filters[this.params[2]]}"]`)
    }

    this.setSearchParams()

    selectors.length > 0 ? this.filterItemsBySelectors(selectors) : this.filterItemsByLength()

    this.isLoading()
  }

  filterItemsByLength = () => {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]

      i < 15 ? item.classList.remove('hidden') : item.classList.add('hidden')
    }
  }

  filterItemsBySelectors = selectors => {
    const items = [...this.el.querySelectorAll(`${selectors.join('')}`)]

    this.items.forEach(item => {
      items.indexOf(item) === -1 ? item.classList.add('hidden') : item.classList.remove('hidden')
    })
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

      this.filterItems()
    }
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

        if (typeof value === 'object') {
          url += `${separator}${key}=${slugify(value[0])}`
        } else {
          url += `${separator}${key}=${slugify(value)}`
        }
      }
    }

    // Push to history
    history.pushState(null, null, url)
  }

  isLoading = (loading = false) => {
    if (loading) {
      this.loading.classList.remove('hidden')
    } else {
      this.loading.classList.add('hidden')
    }
  }
}
