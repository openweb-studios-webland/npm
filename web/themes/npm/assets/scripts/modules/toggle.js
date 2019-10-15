import aria from '../utilities/aria'

export default class Toggle {
  constructor(el) {
    // DOM elements
    this.el = el
    this.target = document.getElementById(this.el.getAttribute('aria-controls'))
    this.partner = this.el.dataset.togglePartner ? document.getElementById(this.el.dataset.togglePartner) : null

    this.attachEventListeners()
  }

  attachEventListeners = () => {
    this.el.addEventListener('click', this.onClick)

    if (this.partner) {
      this.partner.addEventListener('click', this.onClick)
    }
  }

  onClick = e => {
    aria.toggle(this.el, this.target)

    e.preventDefault()
  }
}
