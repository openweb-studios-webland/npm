import debounce from '../utilities/debounce'

export default class Carousel {
  constructor(el) {
    // DOM elements
    this.el = el
    this.track = this.el.querySelector('[data-carousel-track]')
    this.items = [...this.track.children]
    this.itemsCount = this.items.length - 1
    this.itemsOffset = 1
    this.index = 0

    // Config
    this.config = {
      autoplay: this.el.dataset.carouselAutoplay === 'true' ? true : false, // data-carousel-autoplay
      autoplaySpeed: this.el.dataset.carouselAutoplaySpeed || 5000, // data-carousel-autoplay-speed
      itemsToMove: this.el.dataset.carouselMove || 1, // data-carousel-move
      loop: this.el.dataset.carouselLoop === 'false' ? false : true, // data-carousel-loop
      transition: this.el.dataset.carouselTransition === 'false' ? false : true, // data-carousel-transition
      transitionSpeed: this.el.dataset.carouselTransitionSpeed || 500, // data-carousel-transition-speed
    }

    // Initialize if carousel contians more than 1 item
    if (this.itemsCount > 1) {
      this.init()

      // Clone starting/ending items if loop is set to true (true by default)
      if (this.config.loop) {
        this.cloneItems()

        // Autoplay if loop is set to true (false by default)
        if (this.config.autoplay) {
          this.autoplay(true)
        }
      }
    }
  }

  init = () => {
    this.itemsWidth = this.items[0].offsetWidth
    this.itemsOffset = Math.round(this.el.offsetWidth / this.itemsWidth)

    Object.assign(this.track.style, {
      width: `${this.itemsWidth * this.itemsCount}px`,
      left: `-${this.itemsWidth * this.index}px`,
    })

    this.items.forEach(item => {
      item.style.width = `${this.itemsWidth}px`
    })

    this.attachEventListeners()
    this.toggleAttributes()
  }

  reset = () => {
    // Remove track and item widths so items width can be re-calculated
    this.track.style.width = ''

    this.items.forEach(item => {
      item.style.width = ''
    })
  }

  cloneItems = () => {
    // Clone X number of ending items
    for (let i = this.itemsCount; i > this.itemsCount - this.itemsOffset; i--) {
      this.track.insertBefore(this.items[i].cloneNode(true), this.track.firstElementChild)
    }

    // Clone X number of starting items
    for (let i = 0; i < this.itemsOffset; i++) {
      this.track.appendChild(this.items[i].cloneNode(true))
    }

    // Added cloned items to items
    this.items = [...this.track.children]
    this.index = this.itemsOffset
    this.itemsCount = this.items.length - 1

    // Set track position and width
    Object.assign(this.track.style, {
      width: `${this.itemsWidth * this.itemsCount}px`,
      left: `-${this.itemsWidth * this.index}px`,
    })

    this.toggleAttributes()
  }

  autoplay = (toStart = false) => {
    if (toStart) {
      this.config.autoplayInterval = setInterval(() => {
        this.moveTrack(1)
      }, this.config.autoplaySpeed)
    } else {
      clearInterval(this.config.autoplayInterval)
    }
  }

  moveTrack = (direction = 0, toItem = null, setTransition = true) => {
    this.inTransition = this.config.transition
    this.index = toItem ? toItem : this.index + direction * this.config.itemsToMove

    // Set track position and transition
    Object.assign(this.track.style, {
      transition: this.config.transition && setTransition ? `all ${this.config.transitionSpeed}ms linear` : '',
      left: `-${this.itemsWidth * this.index}px`,
    })

    // Check if current item is the first or last item
    this.checkIndex()
    this.toggleAttributes()
  }

  checkIndex = () => {
    let onTransitionEnd = () => {
      this.track.removeEventListener('transitionend', onTransitionEnd, false)
      this.track.style.transition = ''
      this.inTransition = false
    }
    const itemsCount = this.itemsCount - this.itemsOffset

    if (this.config.loop && (this.index <= 0 || this.index > itemsCount)) {
      this.index = this.index <= 0 ? itemsCount - this.itemsOffset + 1 : this.itemsOffset

      onTransitionEnd = () => {
        this.track.removeEventListener('transitionend', onTransitionEnd, false)
        this.track.style.transition = ''

        // Go to first/last item without a transition
        this.moveTrack(null, this.index, false)

        this.inTransition = false
      }
    }

    // Remove event listener after transition is finished
    if (this.config.transition) {
      this.track.addEventListener('transitionend', onTransitionEnd, false)
    }
  }

  toggleAttributes = () => {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]

      i >= this.index && i <= this.index + (this.itemsOffset - 1)
        ? item.removeAttribute('aria-hidden')
        : item.setAttribute('aria-hidden', true)
    }
  }

  attachEventListeners = () => {
    this.triggers = [
      ...this.el.querySelectorAll([
        '[data-carousel-controls] a',
        '[data-carousel-controls] button',
        '[data-carousel-prev]',
        '[data-carousel-next]',
      ]),
    ]

    if (this.triggers.length > 0) {
      this.triggers.forEach(trigger => {
        trigger.addEventListener('click', this.onClick)
      })
    }

    this.el.addEventListener('keyup', this.onKeyup)
    window.addEventListener(
      'resize',
      debounce(() => {
        this.reset()
        this.init()
      }, 200)
    )
  }

  onClick = e => {
    if (!this.inTransition) {
      if (e.currentTarget.hasAttribute('data-carousel-prev')) {
        if (!this.config.loop) {
          if (this.index > 0) {
            this.moveTrack(-1)
          }
        } else {
          this.moveTrack(-1)
        }
      } else if (e.currentTarget.hasAttribute('data-carousel-next')) {
        if (!this.config.loop) {
          if (this.index < this.itemsCount - this.itemsOffset + 1) {
            this.moveTrack(1)
          }
        } else {
          this.moveTrack(1)
        }
      } else {
        this.moveTrack(null, this.triggers.indexOf(e.currentTarget) + this.itemsOffset)
      }

      // Stop autoplay on click event
      if (this.config.autoplay) {
        this.autoplay()
      }
    }

    e.preventDefault()
  }

  onKeyup = e => {
    if (!this.inTransition) {
      if (e.key === 'ArrowLeft' || e.which === 37) {
        this.moveTrack(-1)
      } else if (e.key === 'ArrowRight' || e.which === 39) {
        this.moveTrack(1)
      }

      // Stop autoplay on keyup event
      if (this.config.autoplay) {
        this.autoplay()
      }
    }
  }
}
