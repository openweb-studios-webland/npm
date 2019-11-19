module.exports = {
  toggle: (trigger, target) => {
    if (typeof window.activeMedia !== 'undefined') {
      window.activeMedia = false
    }

    window.activeMedia = !window.activeMedia
  },

  check: () => {
    return !window.activeMedia
  }
}
