export default class Toggle {
  constructor(el) {
    // DOM elements
    this.el = el
    this.watchee = this.el.dataset.toggleWatch ? document.getElementById(this.el.dataset.toggleWatch) : null
    this.target = document.getElementById(this.el.getAttribute('aria-controls'))

    this.attachEventListeners()
  }

  attachEventListeners() {
    this.el.addEventListener('click', this.toggleAttributes)

    if (this.watchee) {
      this.watchee.addEventListener('click', this.toggleAttributes)
    }
  }

  toggleAttributes = e => {
    let isExpanded = this.target.hasAttribute('aria-hidden') ? false : true
    this.el.setAttribute('aria-expanded', !isExpanded)

    if (isExpanded) {
      this.target.setAttribute('aria-hidden', true)
    } else {
      this.target.removeAttribute('aria-hidden')
      this.target.focus()
    }

    e.preventDefault()
  }
}
