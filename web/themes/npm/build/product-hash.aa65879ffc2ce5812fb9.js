(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{127:function(n,t,e){"use strict";function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.r(t),e.d(t,"default",(function(){return r}));var r=function n(t){var e=this;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,"init",(function(){var n=location.hash.substring(1);if(""!==n){var t=e.el.querySelector('[data-product-hash*="'.concat(n,'"]'));t&&e.redirect(t.querySelector("[href]").href)}})),i(this,"redirect",(function(n){window.location.replace(n)})),this.el=t,this.init()}}}]);