import aria from '../utilities/aria'

export default class Modal {
  constructor(el) {
    this.el = el
    this.hasTransition = false

    this.attachEventListeners()
  }

  openModal = () => {
    this.active = document.activeElement

    aria.toggle(this.active, this.el)
    this.setFocusToFirstElements()
    this.attachopenEventListeners()
  }

  closeModal = () => {
    aria.toggle(this.active, this.el)
    this.detachOpenEventListeners()

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

  scrollLock = (lock = false) => {
    const el = document.querySelector('body')

    if (lock) {
      Object.assign(el.style, { overflow: 'hidden', height: '100vh' })
    } else {
      Object.assign(el.style, { overflow: '', height: '' })
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

  attachopenEventListeners = () => {
    this.el.addEventListener('click', this.onClick)
    document.addEventListener('keyup', this.onKeyup)
  }

  detachOpenEventListeners = () => {
    this.el.removeEventListener('click', this.onClick)
    document.removeEventListener('keyup', this.onKeyup)
  }

  onClick = e => {
    if (e.target.hasAttribute('data-modal-close')) {
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
}
