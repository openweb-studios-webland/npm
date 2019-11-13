export default class Video {
  constructor(el) {
    this.el = el
    this.iframe = this.el.querySelector('iframe')
    this.trigger = this.el.querySelector('[data-video-play]')

    console.log(this.iframe.getElementsByTagName('title'))

    if (this.trigger) {
      this.attachEventListeners()
    }
  }

  attachEventListeners = () => {
    this.trigger.addEventListener('click', this.playPause)
  }

  playPause = e => {
    this.iframe.src += this.iframe.src.includes('?') ? '&autoplay=1' : '?autoplay=1'

    if (!this.el.classList.contains('active')) {
      this.el.classList.add('active')

      this.pushToDataLayer()
    }

    e.preventDefault()
  }

  pushToDataLayer = () => {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: 'dataLayer push event',
      event_category: 'Video',
      event_action: this.player.dataset.videoTitle || 'Video Title',
      event_label: 'Play',
    })
  }
}
