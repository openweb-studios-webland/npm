(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{130:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var i=n(323),a=n.n(i);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"attachEventListeners",(function(){n.el.addEventListener("click",n.onClick),n.partner&&n.partner.addEventListener("click",n.onClick)})),r(this,"onClick",(function(t){a.a.toggle(n.el,n.target),t.preventDefault()})),this.el=e,this.target=document.getElementById(this.el.getAttribute("aria-controls")),this.partner=this.el.dataset.togglePartner?document.getElementById(this.el.dataset.togglePartner):null,this.attachEventListeners()}},323:function(t,e){t.exports={toggle:function(t,e){var n=!e.hasAttribute("aria-hidden");t.setAttribute("aria-expanded",!n),n?e.setAttribute("aria-hidden",!0):(e.removeAttribute("aria-hidden"),e.focus())}}}}]);