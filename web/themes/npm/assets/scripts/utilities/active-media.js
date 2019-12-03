module.exports = {
  set: (type, el) => {
    window.activeMedia = {
      type: type,
      el: el,
    }
  },

  get: () => {
    return window.activeMedia
  },

  play: () => {
    if (typeof window.activeMedia !== 'undefined') {
      switch (window.activeMedia.type) {
        case 'audio':
          window.activeMedia.el.play()

          break
        case 'video':
          if (window.activeMedia.el.src.includes('autoplay=0')) {
            window.activeMedia.el.src = window.activeMedia.el.src.replace('autoplay=0', 'autoplay=1')
          } else {
            window.activeMedia.el.src += window.activeMedia.el.src.includes('?') ? '&autoplay=1' : '?autoplay=1'
          }

          break
      }
    }
  },

  pause: () => {
    if (typeof window.activeMedia !== 'undefined') {
      window.activeMedia.el.pause()
    }
  },

  stop: () => {
    if (typeof window.activeMedia !== 'undefined') {
      switch (window.activeMedia.type) {
        case 'audio':
          window.activeMedia.el.stop()

          break
        case 'video':
          window.activeMedia.el.src = window.activeMedia.el.src.replace('autoplay=1', 'autoplay=0')

          break
      }
    }
  },
}
