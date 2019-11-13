import debounce from '../utilities/debounce'

export default class Header {
  constructor(el) {
    this.el = el
    this.trigger = this.el.querySelector('[data-header-trigger]')

    this.attachEventListeners()
  }

  attachEventListeners = () => {
    this.trigger.addEventListener('click', () => {
      const body = document.querySelector('body')

      body.classList.toggle('locked')
    })

    window.addEventListener(
      'scroll',
      debounce(() => {
        this.checkPosition()
      }, 50)
    )
  }

  checkPosition = () => {
    const position = Math.floor((window.pageYOffset || document.scrollTop) - (document.clientTop || 0))

    position && position > 32 ? this.el.classList.add('stuck') : this.el.classList.remove('stuck')
  }
}
