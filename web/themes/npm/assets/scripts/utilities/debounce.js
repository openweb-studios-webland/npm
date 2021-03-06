export default (callback, wait, immediate = false) => {
  let timeout = null

  return function() {
    const now = immediate && !timeout
    const result = () => callback.apply(this, arguments)

    clearTimeout(timeout)
    timeout = setTimeout(result, wait)

    if (now) {
      result()
    }
  }
}
