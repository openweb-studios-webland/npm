(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{123:function(e,i,a){"use strict";a.r(i),a.d(i,"default",(function(){return s}));var t=a(326),n=a.n(t),o=a(327),c=a.n(o);function d(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}var s=function e(i){var a=this;!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"attachEventListeners",(function(){a.trigger.addEventListener("click",a.onPlay)})),d(this,"onPlay",(function(e){a.el.classList.contains("active")||(a.el.classList.add("active"),c.a.push("Video",a.el.dataset.videoTitle)),n.a.stop(),n.a.set("video",a.iframe),n.a.play(),e.preventDefault()})),this.el=i,this.iframe=this.el.querySelector("iframe"),this.trigger=this.el.querySelector("[data-video-play]"),this.trigger&&this.attachEventListeners()}},326:function(e,i){e.exports={set:function(e,i){window.activeMedia={type:e,el:i}},get:function(){return window.activeMedia},play:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.play();break;case"video":window.activeMedia.el.src.includes("autoplay=0")?window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=0","autoplay=1"):window.activeMedia.el.src+=window.activeMedia.el.src.includes("?")?"&autoplay=1":"?autoplay=1"}},pause:function(){void 0!==window.activeMedia&&window.activeMedia.el.pause()},stop:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.stop();break;case"video":window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=1","autoplay=0")}}}},327:function(e,i){e.exports={push:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unknown Title",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Play";window.dataLayer=window.dataLayer||[],dataLayer.push({event:"dataLayer push event",event_category:e,event_action:i,event_label:a})}}}}]);