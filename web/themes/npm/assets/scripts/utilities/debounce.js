export default (callback, wait, immediate = false) => {
  let timeout = null

  return function() {
    const now = immediate && !timeout
    const next = () => callback.apply(this, arguments)

    clearTimeout(timeout)
    timeout = setTimeout(next, wait)

    if (now) {
      next()
    }
  }
}
