(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{123:function(e,i,a){"use strict";a.r(i),a.d(i,"default",(function(){return o}));var t=a(325),n=a.n(t);function c(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}var o=function e(i){var a=this;!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"attachEventListeners",(function(){a.trigger.addEventListener("click",a.onPlay)})),c(this,"onPlay",(function(e){a.el.classList.contains("active")||a.el.classList.add("active"),n.a.stop(),n.a.set("video",a.iframe),n.a.play(),e.preventDefault()})),this.el=i,this.iframe=this.el.querySelector("iframe"),this.trigger=this.el.querySelector("[data-video-play]"),this.trigger&&this.attachEventListeners()}},325:function(e,i){e.exports={set:function(e,i){window.activeMedia={type:e,el:i}},get:function(){return window.activeMedia},play:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.play();break;case"video":window.activeMedia.el.src.includes("autoplay=0")?window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=0","autoplay=1"):window.activeMedia.el.src+=window.activeMedia.el.src.includes("?")?"&autoplay=1":"?autoplay=1"}},pause:function(){void 0!==window.activeMedia&&window.activeMedia.el.pause()},stop:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.stop();break;case"video":window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=1","autoplay=0")}}}}}]);