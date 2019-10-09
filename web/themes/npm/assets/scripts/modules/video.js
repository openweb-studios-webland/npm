export default class Video {
  constructor(el) {
    // DOM elements
    this.container = el
    this.iframe = this.container.querySelector('iframe')
    this.playTrigger = this.container.querySelector('[data-video-play]')

    this.attachEventListeners()
  }

  play = () => {
    this.iframe.src += this.iframe.src.includes('?') ? '&autoplay=1' : '?autoplay=1'

    if (!this.container.classList.contains('active')) {
      this.container.classList.add('active')
    }
  }

  attachEventListeners = () => {
    this.playTrigger.addEventListener('click', this.play)
  }
}
