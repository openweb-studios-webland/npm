export default class Slider {
  constructor(el) {
    this.slider = el

    // Options
    this.autoplay = this.slider.dataset.sliderAutoplay || false
    this.autoplaySpeed = this.slider.dataset.sliderAutoplaySpeed || 5000
    this.infinite = this.slider.dataset.sliderInfinite || true
    this.slidesToMove = this.slider.dataset.sliderSlidesToMove || 1
    this.slidesToShow = 1

    // States
    this.index = 0
    this.hasTransition = true
    this.transitionSpeed = 500

    this.attachEventListeners()
    this.init()

    if (this.infinite) {
      this.cloneSlides()
    }
  }

  init = () => {
    this.track = this.slider.querySelector('[data-slider-track]')
    this.slides = [...this.track.children]
    this.slidesCount = this.slides.length - 1
    this.slidesWidth = this.slides[0].offsetWidth
    this.slidesToShow = Math.round(this.slider.offsetWidth / this.slidesWidth) + 1

    this.slides.forEach(slide => {
      slide.style.width = `${this.slidesWidth}px`
    })

    this.track.style.width = `${this.slidesWidth * this.slidesCount}px`
  }

  cloneSlides = () => {
    for (let i = this.slidesCount; i > this.slidesCount - this.slidesToShow; i--) {
      const clonedSlide = this.slides[i].cloneNode(true)

      this.track.insertBefore(clonedSlide, this.track.firstElementChild)
    }

    for (let i = 0; i < this.slidesToShow; i++) {
      const clonedSlide = this.slides[i].cloneNode(true)

      this.track.appendChild(clonedSlide)
    }

    this.index = this.slidesToShow
    this.slides = [...this.track.children]
    this.slidesCount = this.slides.length - 1

    Object.assign(this.track.style, {
      width: `${this.slidesWidth * this.slidesCount}px`,
      left: `-${this.slidesWidth * this.index}px`,
    })
  }

  moveSlides = (direction = 0, toIndex = null, setTransition = true) => {
    this.isTransitioning = this.hasTransition
    this.index = toIndex ? toIndex : this.index + direction * this.slidesToMove

    Object.assign(this.track.style, {
      transition: this.hasTransition && setTransition ? `all ${this.transitionSpeed}ms linear` : '',
      left: `-${this.slidesWidth * this.index}px`,
    })

    this.checkIndex()
  }

  checkIndex = () => {
    let onTransitionEnd = () => {
      this.track.removeEventListener('transitionend', onTransitionEnd, false)
      this.track.style.transition = ''
      this.isTransitioning = false
    }
    const slidesCount = this.slidesCount - this.slidesToShow

    if (this.index <= 0 || this.index > slidesCount) {
      if (this.index <= 0) {
        this.index = slidesCount - (this.slidesToShow - 1)
      } else if (this.index > slidesCount) {
        this.index = this.slidesToShow
      }

      onTransitionEnd = () => {
        this.track.removeEventListener('transitionend', onTransitionEnd, false)
        this.moveSlides(null, this.index, false)
        this.track.style.transition = ''
        this.isTransitioning = false
      }
    }

    if (this.hasTransition) {
      this.track.addEventListener('transitionend', onTransitionEnd, false)
    }
  }

  attachEventListeners = () => {
    const triggerSelectors = [
      '[data-slider-nav] a',
      '[data-slider-nav] button',
      '[data-slider-prev]',
      '[data-slider-next]',
    ]
    this.triggers = [...this.slider.querySelectorAll(triggerSelectors)]

    if (this.triggers.length > 0) {
      this.triggers.forEach(trigger => {
        trigger.addEventListener('click', this.onClick)
      })
    }

    this.slider.addEventListener('keyup', this.onKeyup)
  }

  onClick = e => {
    if (!this.isTransitioning) {
      if (e.target.hasAttribute('data-slider-prev')) {
        this.moveSlides(-1)
      } else if (e.target.hasAttribute('data-slider-next')) {
        this.moveSlides(1)
      } else {
        this.moveSlides(null, this.triggers.indexOf(e.target) + this.slidesToShow)
      }
    }

    e.preventDefault()
  }

  onKeyup = e => {
    if (!this.isTransitioning) {
      if (e.key === 'ArrowLeft' || e.which === 37) {
        this.moveSlides(-1)
      } else if (e.key === 'ArrowRight' || e.which === 39) {
        this.moveSlides(1)
      }
    }
  }
}
