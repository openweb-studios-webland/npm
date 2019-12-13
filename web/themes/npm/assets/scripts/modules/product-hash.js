export default class ProductHash {
  constructor(el) {
    this.el = el

    this.init()
  }

  init = () => {
    const hash = location.hash.substring(1)

    if (hash !== '') {
      const el = this.el.querySelector(`[data-product-hash="${hash}"]`)

      if (el) {
        const siblings = this.getSiblings(el)

        this.removeSiblings(siblings)
      }
    }
  }

  getSiblings = el => {
    let siblings = []
    let sibling = el.parentNode.firstChild

    // Loop through siblings and push to an array
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== el) {
        siblings.push(sibling)
      }

      sibling = sibling.nextSibling
    }

    return siblings
  }

  removeSiblings = siblings => {
    // Loop through and remove siblings from DOM
    siblings.forEach(sibling => {
      sibling.remove()
    })
  }
}
