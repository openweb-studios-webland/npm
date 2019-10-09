import debounce from '../utilities/debounce'

export default class Header {
  constructor(el) {
    // DOM elements
    this.header = el

    this.attachEventListeners()
  }

  attachEventListeners = () => {
    window.addEventListener(
      'scroll',
      debounce(() => {
        this.checkPosition()
      }, 200)
    )
  }

  checkPosition = () => {
    const position = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)

    position && position > 100 ? this.header.classList.add('stuck') : this.header.classList.remove('stuck')
  }
}
