export default class Preload {
  constructor() {
    window.addEventListener('load', () => {
      document.body.classList.remove('preload')
    })
  }
}
