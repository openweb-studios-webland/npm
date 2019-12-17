import $ from 'jquery' // Needed for slick slider
import slick from 'slick-carousel'

export default class Slick {
  constructor(el) {
    this.el = el

    $(this.el).slick({
      prevArrow: this.el.parentNode.querySelector('.slick-prev'),
      nextArrow: this.el.parentNode.querySelector('.slick-next'),
    })
  }
}
