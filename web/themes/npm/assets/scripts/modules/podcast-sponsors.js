import slugify from '../utilities/slugify'

export default class PodcastSponsors {
  constructor(el) {
    this.el = el
    this.items = [...this.el.querySelectorAll('[data-podcast-sponsors-keywords]')]
    this.select = this.el.querySelector('[data-podcast-sponsors-select]')
    this.checkbox = this.el.querySelector('[data-podcast-sponsors-checkbox]')
    this.search = this.el.querySelector('[data-podcast-sponsors-search]')

    //this.selectors = []
    this.filters = {}

    this.init()
  }

  init = () => {
    this.attachEventListeners()

    this.getSearchParams()
  }

  attachEventListeners = () => {
    this.select.addEventListener('change', this.onPodcasts)
    this.checkbox.addEventListener('change', this.onHasOffers)
    this.search.addEventListener('keyup', this.onKeywords)
  }

  onPodcasts = e => {
    this.filters['podcasts'] = [e.target.value, this.select.options[this.select.selectedIndex].text]

    this.filterItems()
  }

  onHasOffers = e => {
    this.filters['has-offers'] = e.target.checked

    this.filterItems()
  }

  onKeywords = e => {
    const value = e.target.value

    if (value && value !== '') {
      this.filters['keywords'] = e.target.value

      this.filterItems()
    }
  }

  filterItems = () => {
    let selectors = []

    if (this.filters.hasOffers) {
      selectors.push('[data-podcast-sponsors-has-offers="yes"]')
    }

    if (this.filters.podcasts) {
      selectors.push(`[data-podcast-sponsors-keywords*="${this.filters.podcasts[0]}"]`)
    }

    if (this.filters.keywords) {
      selectors.push(`[data-podcast-sponsors-keywords*="${this.filters.keywords}"]`)
    }

    this.setSearchParams()
    selectors.length > 0 ? this.filterItemsBySelectors(selectors) : this.filterItemsByLength()
  }

  filterItemsByLength = () => {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]

      i < 15 ? item.classList.remove('hidden') : item.classList.add('hidden')
    }
  }

  filterItemsBySelectors = selectors => {
    const items = [...this.el.querySelectorAll(`${selectors.join(' ')}`)]

    this.items.forEach(item => {
      items.indexOf(item) === -1 ? item.classList.add('hidden') : item.classList.remove('hidden')
    })
  }

  getSearchParams = () => {
    const params = location.search
    console.log(params)
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
          value = value[0]
        }

        url += `${separator}${key}=${slugify(value)}`
      }
    }

    history.pushState(null, null, url)
  }
}
