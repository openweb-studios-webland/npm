import activeMedia from '../utilities/active-media'
import dataLayer from '../utilities/data-layer'

export default class Video {
  constructor(el) {
    this.el = el
    this.iframe = this.el.querySelector('iframe')
    this.trigger = this.el.querySelector('[data-video-play]')

    if (this.trigger) {
      this.attachEventListeners()
    }
  }

  attachEventListeners = () => {
    this.trigger.addEventListener('click', this.onPlay)
  }

  onPlay = e => {
    if (!this.el.classList.contains('active')) {
      this.el.classList.add('active')
      dataLayer.push('Video', this.el.dataset.videoTitle)
    }

    activeMedia.stop()
    activeMedia.set('video', this.iframe)
    activeMedia.play()

    e.preventDefault()
  }
}
