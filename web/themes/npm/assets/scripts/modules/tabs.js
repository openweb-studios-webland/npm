import aria from '../utilities/aria'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../../../config/tailwindcss/tailwindcss.config.js'

export default class Tabs {
  constructor(el) {
    // DOM elements
    this.el = el
    this.triggers = [...this.el.querySelectorAll('[data-tabs-trigger]')]
    this.targets = [...this.el.querySelectorAll('[data-tabs-target]')]
    this.tailwindConfig = resolveConfig(tailwindConfig) // Tailwind CSS config variables
    this.mediaQuery = window.matchMedia(`(min-width: ${this.tailwindConfig.theme.screens.lg})`)
    this.index = 0

    // Config
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
    this.container.classList.add('tabs-targets')
    this.el.parentNode.insertBefore(this.container, this.el.nextSibling)

    this.targets.forEach(target => {
      this.container.appendChild(target)
    })
  }

  attachEventListeners = () => {
    if (this.triggers.length > 0) {
      this.triggers.forEach(trigger => {
        trigger.addEventListener('click', this.onClick)
      })
    }

    if (this.config.tabsToAccordion) {
      this.mediaQuery.addListener(this.matchMedia)
      this.matchMedia(this.mediaQuery)
    }
  }

  onClick = e => {
    aria.toggle(this.triggers[this.index], this.targets[this.index])

    this.index = this.triggers.indexOf(e.currentTarget)

    aria.toggle(this.triggers[this.index], this.targets[this.index])

    e.preventDefault()
  }

  matchMedia = mq => {
    if (mq.matches) {
      this.convertToTabs()
    } else {
      this.convertToAccordion()
    }
  }
}
