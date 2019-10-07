export default class Toggle {
  constructor(el) {
    // DOM elements
    this.toggle = el
    this.watchee = this.toggle.dataset.toggleWatch ? document.getElementById(this.toggle.dataset.toggleWatch) : null
    this.target = document.getElementById(this.toggle.getAttribute('aria-controls'))

    this.attachEventListeners()
  }

  attachEventListeners() {
    this.toggle.addEventListener('click', this.toggleAttributes)

    if (this.watchee) {
      this.watchee.addEventListener('click', this.toggleAttributes)
    }
  }

  toggleAttributes = e => {
    let isExpanded = this.target.hasAttribute('aria-hidden') ? false : true
    this.toggle.setAttribute('aria-expanded', !isExpanded)

    if (isExpanded) {
      this.target.setAttribute('aria-hidden', true)
    } else {
      this.target.removeAttribute('aria-hidden')
      this.target.focus()
    }

    e.preventDefault()
  }
}
