(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{123:function(e,t,i){"use strict";function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.r(t),i.d(t,"default",(function(){return n}));var n=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"attachEventListeners",(function(){i.trigger.addEventListener("click",i.playPause)})),a(this,"playPause",(function(e){i.iframe.src+=i.iframe.src.includes("?")?"&autoplay=1":"?autoplay=1",i.el.classList.contains("active")||i.el.classList.add("active"),e.preventDefault()})),this.el=t,this.iframe=this.el.querySelector("iframe"),this.trigger=this.el.querySelector("[data-video-play]"),this.trigger&&this.attachEventListeners()}}}]);