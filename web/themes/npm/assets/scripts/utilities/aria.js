module.exports = {
  toggle: (trigger, target) => {
    let isExpanded = target.hasAttribute('aria-hidden') ? false : true
    trigger.setAttribute('aria-expanded', !isExpanded)

    if (isExpanded) {
      target.setAttribute('aria-hidden', true)
    } else {
      target.removeAttribute('aria-hidden')
      target.focus()
    }
  },
}
