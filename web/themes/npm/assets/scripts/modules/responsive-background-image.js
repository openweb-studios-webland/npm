export default class ResponsiveBackgroundImage {
  constructor(el) {
    this.el = el
    this.image = this.el.querySelector('img')
    this.imageSrc = ''

    this.attachEventListeners()

    if (this.image.complete) {
      this.update()
    }
  }

  attachEventListeners = () => {
    this.image.addEventListener('load', this.update)
  }

  update = () => {
    let imageSrc = typeof this.image.currentSrc !== 'undefined' ? this.image.currentSrc : this.image.src

    if (this.imageSrc !== imageSrc) {
      this.imageSrc = imageSrc
      this.el.style.backgroundImage = `url("${this.imageSrc}")`
    }
  }
}
