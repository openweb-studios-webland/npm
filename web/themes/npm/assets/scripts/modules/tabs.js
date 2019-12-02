import aria from '../utilities/aria'

export default class Tabs {
  constructor(el) {
    this.el = el
    this.triggers = [...this.el.querySelectorAll('[data-tabs-trigger]')]
    this.targets = [...this.el.querySelectorAll('[data-tabs-target]')]
    this.mq = window.matchMedia(`(min-width: 1024px)`)
    this.index = 0

    this.config = {
      tabsToAccordion: this.el.dataset.tabsToAccordion === 'true' ? true : false,
    }

    this.init()
  }

  init = () => {
    for (let i = 0; i < this.triggers.length; i++) {
      aria.toggle(this.triggers[i], this.targets[i])
    }

    aria.toggle(this.triggers[this.index], this.targets[this.index])

    this.attachEventListeners()
    this.clickTriggerOnHash()
  }

  convertToAccordion = () => {
    if (this.container) {
      this.targets.forEach(target => {
        const trigger = this.el.querySelector(`[aria-controls="${target.id}"]`)

        trigger.parentNode.appendChild(target)
      })

      this.container.remove()
    }
  }

  convertToTabs = () => {
    this.container = document.createElement('div')
    this.container.classList.add('w-full', 'lg:w-2/3', 'xl:w-3/4')
    this.el.parentNode.insertBefore(this.container, this.el.nextSibling)

    this.targets.forEach(target => {
      this.container.appendChild(target)
    })
  }

  clickTriggerOnHash = () => {
    let hash = location.hash

    if (hash !== '') {
      hash = hash.split('#')[1]
      const el = this.el.querySelector(`[aria-controls="${hash}"]`)

      // Clicked trigger is hash exists
      if (el) {
        el.click()
      }
    }
  }

  attachEventListeners = () => {
    if (this.triggers.length > 0) {
      this.triggers.forEach(trigger => {
        trigger.addEventListener('click', this.onClick)
      })
    }

    if (this.config.tabsToAccordion) {
      this.mq.addListener(this.matchMedia)
      this.matchMedia()
    }
  }

  onClick = e => {
    const index = this.triggers.indexOf(e.currentTarget)

    if (index !== this.index) {
      if (this.triggers[this.index].getAttribute('aria-expanded') === 'true') {
        aria.toggle(this.triggers[this.index], this.targets[this.index])
      }

      this.index = index
      aria.toggle(this.triggers[this.index], this.targets[this.index])
    } else if (this.config.tabsToAccordion && !this.mq.matches) {
      aria.toggle(this.triggers[this.index], this.targets[this.index])
    }

    e.preventDefault()
  }

  matchMedia = () => {
    if (this.mq.matches) {
      this.convertToTabs()
    } else {
      this.convertToAccordion()
    }
  }
}
