import activeMedia from '../utilities/active-media'
import aria from '../utilities/aria'
import dataLayer from '../utilities/data-layer'

export default class Modal {
  constructor(el) {
    this.el = el
    this.audioPlayer = this.getAudioPlayer()
    this.videoPlayer = this.getVideoPayer()
    this.hasTransition = false

    this.attachEventListeners()
  }

  openModal = () => {
    this.active = document.activeElement

    aria.toggle(this.active, this.el)
    this.setFocusToFirstElements()
    this.scrollLock()
    this.attachOpenEventListeners()

    if (this.audioPlayer || this.videoPlayer) {
      activeMedia.stop()
    }

    if (this.audioPlayer) {
      this.audioPlayer.click()
    }

    if (this.videoPlayer) {
      activeMedia.set('video', this.videoPlayer)
      activeMedia.play()
      dataLayer.push('Video', this.videoPlayer.parentNode.dataset.videoTitle)
    }
  }

  closeModal = () => {
    aria.toggle(this.active, this.el)
    this.scrollLock(false)
    this.detachOpenEventListeners()

    if (this.audioPlayer || this.videoPlayer) {
      activeMedia.stop()
    }

    if (this.active) {
      this.active.focus()
    }

    if (this.hasTransition) {
      const onTransitionEnd = () => {
        this.el.classList.remove('open')
        this.el.removeEventListener('transitionend', onTransitionEnd, false)
      }

      this.el.addEventListener('transitionend', onTransitionEnd, false)
    } else {
      this.el.classList.remove('open')
    }
  }

  scrollLock = (scrollLock = true) => {
    const body = document.querySelector('body')

    if (scrollLock) {
      body.classList.add('locked')
      body.style.paddingTop = `${this.getHeight(document.querySelector('[data-module="header"]'))}px`
    } else {
      body.classList.remove('locked')
      body.style.paddingTop = ``
    }
  }

  getHeight = el => {
    let height = el.offsetHeight
    const style = getComputedStyle(el)
    height += parseInt(style.marginTop) + parseInt(style.marginBottom)

    return height
  }

  trapFocus = e => {
    if (!this.el.contains(document.activeElement)) {
      this.setFocusToFirstElements()
    } else {
      const focusedElementIndex = focusableElements.indexOf(document.activeElement)

      if (e.shiftKey && focusedElementIndex === 0) {
        this.setFocusToLastElement()

        e.preventDefault()
      }

      if (!e.shiftKey && focusedElementIndex === focusableElements.length - 1) {
        this.setFocusToFirstElements()

        e.preventDefault()
      }
    }
  }

  getFocusableElements(element) {
    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      'select:not([disabled]):not([aria-hidden])',
      'textarea:not([disabled]):not([aria-hidden])',
      'button:not([disabled]):not([aria-hidden])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])',
    ]

    return [...element.querySelectorAll(focusableSelectors)]
  }

  setFocusToFirstElements = () => {
    const focusableElements = this.getFocusableElements(this.el)

    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }

  setFocusToLastElement = () => {
    const focusableElements = this.getFocusableElements(this.el)

    if (focusableElements.length > 0) {
      focusableElements[focusableElements.length - 1].focus()
    }
  }

  attachEventListeners = () => {
    const triggers = [...document.querySelectorAll(`[aria-controls="${this.el.id}"]`)]

    if (triggers.length > 0) {
      triggers.forEach(trigger => {
        trigger.addEventListener('click', this.openModal)
      })
    }
  }

  attachOpenEventListeners = () => {
    this.el.addEventListener('click', this.onClick)
    document.addEventListener('keyup', this.onKeyup)
  }

  detachOpenEventListeners = () => {
    this.el.removeEventListener('click', this.onClick)
    document.removeEventListener('keyup', this.onKeyup)
  }

  onClick = e => {
    if (e.target.hasAttribute('data-modal-close') && e.target.closest('[data-module="modal"]') === this.el) {
      this.closeModal()

      e.preventDefault()
    }
  }

  onKeyup = e => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.closeModal()
    }

    if (e.key === 'Tab' || e.keyCode === 9) {
      this.trapFocus(e)
    }
  }

  getAudioPlayer = () => {
    return this.el.querySelector('[data-module="audio"] [data-audio-play-pause]')
  }

  getVideoPayer = () => {
    const video = this.el.querySelector('iframe')

    return video && (video.src.includes('youtube') || video.src.includes('vimeo')) ? video : null
  }
}
