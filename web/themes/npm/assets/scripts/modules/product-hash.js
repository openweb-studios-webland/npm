export default class ProductHash {
  constructor(el) {
    this.el = el

    this.init()
  }

  init = () => {
    const hash = location.hash.substring(1)

    if (hash === '') {
      return
    }

    const product = this.el.querySelector(`[data-product-hash*="${hash}"]`)

    if (product) {
      this.redirect(product.querySelector('[href]').href)
    }
  }

  redirect = url => {
    window.location.replace(url)
  }
}
