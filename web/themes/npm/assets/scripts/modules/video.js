export default class Video {
  constructor(el) {
    // DOM elements
    this.el = el
    this.iframe = this.el.querySelector('iframe')
    this.trigger = this.el.querySelector('[data-video-play]')

    this.attachEventListeners()
  }

  attachEventListeners = () => {
    this.trigger.addEventListener('click', this.playPause)
  }

  playPause = e => {
    this.iframe.src += this.iframe.src.includes('?') ? '&autoplay=1' : '?autoplay=1'

    if (!this.el.classList.contains('active')) {
      this.el.classList.add('active')
    }

    e.preventDefault()
  }
}
