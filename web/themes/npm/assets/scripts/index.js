import whatInput from 'what-input'
import '@babel/polyfill'
import './polyfills/foreach'
import './polyfills/sticky'
import '../styles/index.css'

/**
 * Rendered modules
 * Use `data-module=""` to import any modules
 */
const modules = document.querySelectorAll('[data-module]')
const declaredModules = {}

modules.forEach(module => {
  module.dataset.module.split(' ').forEach(moduleName => {
    import(
      /* webpackChunkName: "[request]" */
      `./modules/${moduleName}`
    ).then(Module => {
      declaredModules[moduleName] = new Module.default(module)
    })
  })
})
