(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{130:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var a=n(327),r=n.n(a);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"attachEventListeners",(function(){n.el.addEventListener("click",n.onClick),n.partners&&n.partners.forEach((function(t){t.addEventListener("click",n.onClick)}))})),i(this,"onClick",(function(t){r.a.toggle(n.el,n.target),t.preventDefault()})),this.el=e,this.target=document.getElementById(this.el.getAttribute("aria-controls")),this.partners=this.el.dataset.togglePartners?document.querySelectorAll('[data-toggle-partner="'.concat(this.el.dataset.togglePartners,'"]')):null,this.attachEventListeners()}},327:function(t,e){t.exports={toggle:function(t,e){var n=!e.hasAttribute("aria-hidden");t.setAttribute("aria-expanded",!n),n?e.setAttribute("aria-hidden",!0):(e.removeAttribute("aria-hidden"),e.focus())}}}}]);