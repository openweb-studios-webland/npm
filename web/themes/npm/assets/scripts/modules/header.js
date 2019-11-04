import debounce from '../utilities/debounce'

export default class Header {
  constructor(el) {
    this.el = el

    this.attachEventListeners()
  }

  attachEventListeners = () => {
    window.addEventListener(
      'scroll',
      debounce(() => {
        this.checkPosition()
      }, 50)
    )
  }

  checkPosition = () => {
    const position = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)

    position && position > 100 ? this.el.classList.add('stuck') : this.el.classList.remove('stuck')
  }
}
