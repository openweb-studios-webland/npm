import throttle from '../utilities/throttle'

export default class Header {
  constructor(el) {
    this.el = el
    this.trigger = this.el.querySelector('[data-header-trigger]')

    this.attachEventListeners()
    this.checkPosition()
  }

  attachEventListeners = () => {
    this.trigger.addEventListener('click', () => {
      const body = document.querySelector('body')

      body.classList.toggle('locked')
    })

    window.addEventListener(
      'scroll',
      throttle(() => {
        this.checkPosition()
      }, 10)
    )
  }

  checkPosition = () => {
    const position = Math.floor((window.pageYOffset || document.scrollTop) - (document.clientTop || 0))
    const buffer = document.querySelector('.admin-bar') ? 52 : 20

    position && position > buffer ? this.el.classList.add('stuck') : this.el.classList.remove('stuck')
  }
}
