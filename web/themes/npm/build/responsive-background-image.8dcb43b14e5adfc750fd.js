(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{127:function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.r(t),i.d(t,"default",(function(){return a}));var a=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"attachEventListeners",(function(){i.image.addEventListener("load",i.update)})),n(this,"update",(function(){var e=void 0!==i.image.currentSrc?i.image.currentSrc:i.image.src;i.imageSrc!==e&&(i.imageSrc=e,i.el.style.backgroundImage='url("'.concat(i.imageSrc,'")'))})),this.el=t,this.image=this.el.querySelector("img"),this.imageSrc="",this.attachEventListeners(),this.image.complete&&this.update()}}}]);