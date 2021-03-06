import * as Audio from './audio'
import * as Video from './video'

export default class InfiniteScroll {
  constructor(el) {
    this.el = el
    this.container = this.el.querySelector('[data-infinite-scroll-container]')
    this.trigger = this.el.querySelector('[data-infinite-scroll-trigger]')
    this.itemsCount = this.el.dataset.infiniteScrollCount || 1
    this.index = 2

    if (this.itemsCount > 1) {
      this.attachEventListeners()
    }
  }

  attachEventListeners = () => {
    this.trigger.addEventListener('click', this.onClick)
  }

  onClick = e => {
    e.preventDefault()

    this.xhrRequest(this.trigger.getAttribute('href'))
  }

  initModules = (el, selector, Module) => {
    const modules = el.querySelectorAll(selector)

    modules.forEach(module => {
      new Module.default(module)
    })
  }

  xhrRequest = url => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, false)
    xhr.send(null)

    const parser = new DOMParser()
    const document = parser.parseFromString(xhr.responseText, 'text/html')
    const items = document.querySelectorAll('body > div')

    items.forEach(item => {
      this.container.appendChild(item)

      this.initModules(item, '[data-module="video"]', Video)
      this.initModules(item, '[data-module="audio"]', Audio)
    })

    this.paginate(url)
  }

  paginate = url => {
    if (this.index < this.itemsCount) {
      url = url.replace(`/${this.index.toString()}/`, `/${(this.index + 1).toString()}/`)
      this.trigger.setAttribute('href', url)
      this.index++
    } else {
      this.trigger.remove()
    }
  }
}
