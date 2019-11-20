import aria from '../utilities/aria'
import activeMedia from '../utilities/active-media'

export default class Modal {
  constructor(el) {
    this.el = el
    this.audio = this.getAudio()
    this.video = this.getVideo()
    this.hasTransition = false

    this.attachEventListeners()
  }

  openModal = () => {
    this.active = document.activeElement

    aria.toggle(this.active, this.el)
    this.setFocusToFirstElements()
    this.scrollLock()
    this.attachOpenEventListeners()

    if (this.audio) {
      this.playPauseAudio()
    }

    if (this.video) {
      this.playVideo()
    }
  }

  closeModal = () => {
    aria.toggle(this.active, this.el)
    this.scrollLock(false)
    this.detachOpenEventListeners()

    if (this.audio && this.audio.classList.contains('playing')) {
      this.playPauseAudio()
    }

    if (this.video) {
      this.stopVideo()
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
    const header = document.querySelector('[data-module="header"]')

    if (scrollLock) {
      body.classList.add('locked')
      body.style.paddingTop = `${header.offsetHeight}px`
    } else {
      body.classList.remove('locked')
      body.style.paddingTop = ``
    }
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

  getAudio = () => {
    return this.el.querySelector('[data-module="audio"]')
  }

  playPauseAudio = () => {
    const playPauseTrigger = this.audio.querySelector('[data-audio-play-pause]')

    playPauseTrigger.click()
  }

  getVideo = () => {
    const video = this.el.querySelector('iframe')

    return video && (video.src.includes('youtube') || video.src.includes('vimeo')) ? video : null
  }

  playVideo = () => {
    this.video.src += this.video.src.includes('?') ? '&autoplay=1' : '?autoplay=1'
    activeMedia.toggle()
  }

  stopVideo = () => {
    this.video.src = this.video.src.replace('autoplay=1', 'autoplay=0')
    activeMedia.toggle()
  }
}
