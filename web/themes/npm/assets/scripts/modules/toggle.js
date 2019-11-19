import aria from '../utilities/aria'

export default class Toggle {
  constructor(el) {
    this.el = el
    this.target = document.getElementById(this.el.getAttribute('aria-controls'))
    this.partners = this.el.dataset.togglePartners ? document.querySelectorAll(`[data-toggle-partner="${this.el.dataset.togglePartners}"]`) : null

    this.attachEventListeners()
  }

  attachEventListeners = () => {
    this.el.addEventListener('click', this.onClick)

    if (this.partners) {
      this.partners.forEach(partner => {
        partner.addEventListener('click', this.onClick)
      })
    }
  }

  onClick = e => {
    console.log(this.target)
    aria.toggle(this.el, this.target)

    e.preventDefault()
  }
}
