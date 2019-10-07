import debounce from '../utilities/debounce'

export default class Carousel {
  constructor(el) {
    // DOM elements
    this.carousel = el
    this.track = this.carousel.querySelector('[data-carousel-track]')
    this.items = [...this.track.children]

    // Config
    this.config = {
      autoplay: this.carousel.dataset.carouselAutoplay === 'true' ? true : false, // data-carousel-autoplay
      autoplaySpeed: this.carousel.dataset.carouselAutoplaySpeed || 5000, // data-carousel-autoplay-speed
      index: 0,
      itemsCount: this.items.length - 1,
      itemsOffset: 1,
      itemsToMove: this.carousel.dataset.carouselMove || 1, // data-carousel-move
      loop: this.carousel.dataset.carouselLoop === 'false' ? false : true, // data-carousel-loop
      transition: this.carousel.dataset.carouselTransition === 'false' ? false : true, // data-carousel-transition
      transitionSpeed: this.carousel.dataset.carouselTransitionSpeed || 500, // data-carousel-transition-speed
    }

    // Initialize if carousel contians more than 1 item
    if (this.config.itemsCount > 1) {
      this.init()

      // Clone starting/ending items if loop is set to true (true by default)
      if (this.config.loop) {
        this.clone()

        // Autoplay if loop is set to true (false by default)
        if (this.config.autoplay) {
          this.autoplay(true)
        }
      }
    }
  }

  init = () => {
    this.config.itemsWidth = this.items[0].offsetWidth
    this.config.itemsOffset = Math.round(this.carousel.offsetWidth / this.config.itemsWidth)

    Object.assign(this.track.style, {
      width: `${this.config.itemsWidth * this.config.itemsCount}px`,
      left: `-${this.config.itemsWidth * this.config.index}px`,
    })

    this.items.forEach(item => {
      item.style.width = `${this.config.itemsWidth}px`
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

  clone = () => {
    // Clone X number of ending items
    for (let i = this.config.itemsCount; i > this.config.itemsCount - this.config.itemsOffset; i--) {
      const clonedItem = this.items[i].cloneNode(true)

      this.track.insertBefore(clonedItem, this.track.firstElementChild)
    }

    // Clone X number of starting items
    for (let i = 0; i < this.config.itemsOffset; i++) {
      const clonedItem = this.items[i].cloneNode(true)

      this.track.appendChild(clonedItem)
    }

    // Added cloned items to items
    this.items = [...this.track.children]
    this.config.index = this.config.itemsOffset
    this.config.itemsCount = this.items.length - 1

    // Set track position and width
    Object.assign(this.track.style, {
      width: `${this.config.itemsWidth * this.config.itemsCount}px`,
      left: `-${this.config.itemsWidth * this.config.index}px`,
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
    this.config.inTransition = this.config.transition
    this.config.index = toItem ? toItem : this.config.index + direction * this.config.itemsToMove

    // Set track position and transition
    Object.assign(this.track.style, {
      transition: this.config.transition && setTransition ? `all ${this.config.transitionSpeed}ms linear` : '',
      left: `-${this.config.itemsWidth * this.config.index}px`,
    })

    // Check if current item is the first or last item
    this.checkIndex()
    this.toggleAttributes()
  }

  checkIndex = () => {
    let onTransitionEnd = () => {
      this.track.removeEventListener('transitionend', onTransitionEnd, false)
      this.track.style.transition = ''
      this.config.inTransition = false
    }
    const itemsCount = this.config.itemsCount - this.config.itemsOffset

    if (this.config.loop && (this.config.index <= 0 || this.config.index > itemsCount)) {
      this.config.index = this.config.index <= 0 ? itemsCount - this.config.itemsOffset + 1 : this.config.itemsOffset

      onTransitionEnd = () => {
        this.track.removeEventListener('transitionend', onTransitionEnd, false)
        this.track.style.transition = ''

        // Go to first/last item without a transition
        this.moveTrack(null, this.config.index, false)

        this.config.inTransition = false
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

      i >= this.config.index && i <= this.config.index + (this.config.itemsOffset - 1)
        ? item.removeAttribute('aria-hidden')
        : item.setAttribute('aria-hidden', true)
    }
  }

  attachEventListeners = () => {
    this.triggers = [
      ...this.carousel.querySelectorAll([
        '[data-carousel-nav] a',
        '[data-carousel-nav] button',
        '[data-carousel-prev]',
        '[data-carousel-next]',
      ]),
    ]

    if (this.triggers.length > 0) {
      this.triggers.forEach(trigger => {
        trigger.addEventListener('click', this.onClick)
      })
    }

    this.carousel.addEventListener('keyup', this.onKeyup)
    window.addEventListener(
      'resize',
      debounce(() => {
        this.reset()
        this.init()
      }, 200)
    )
  }

  onClick = e => {
    if (!this.config.inTransition) {
      if (e.currentTarget.hasAttribute('data-carousel-prev')) {
        if (!this.config.loop) {
          if (this.config.index > 0) {
            this.moveTrack(-1)
          }
        } else {
          this.moveTrack(-1)
        }
      } else if (e.currentTarget.hasAttribute('data-carousel-next')) {
        if (!this.config.loop) {
          if (this.config.index < this.config.itemsCount - this.config.itemsOffset + 1) {
            this.moveTrack(1)
          }
        } else {
          this.moveTrack(1)
        }
      } else {
        this.moveTrack(null, this.triggers.indexOf(e.target) + this.config.itemsOffset)
      }

      // Stop autoplay on click event
      if (this.config.autoplay) {
        this.autoplay()
      }
    }

    e.preventDefault()
  }

  onKeyup = e => {
    if (!this.config.inTransition) {
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
