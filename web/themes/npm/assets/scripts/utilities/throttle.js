export default (callback, wait) => {
  let prev = 0

  return function() {
    const now = Date.now()
    const result = () => callback.apply(this, arguments)

    if (now - prev < wait) {
      return
    }

    prev = now
    result()
  }
}
