export default class Toggle {
  constructor(el) {
    // DOM elements
    this.el = el
    this.match = this.el.dataset.toggleMatch ? document.getElementById(this.el.dataset.toggleMatch) : null
    this.target = document.getElementById(this.el.getAttribute('aria-controls'))

    this.attachEventListeners()
  }

  attachEventListeners() {
    this.el.addEventListener('click', this.toggleAttributes)

    if (this.match) {
      this.match.addEventListener('click', this.toggleAttributes)
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
