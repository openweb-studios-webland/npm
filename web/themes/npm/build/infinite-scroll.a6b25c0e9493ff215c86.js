(window.webpackJsonp=window.webpackJsonp||[]).push([[4,1,10],{122:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return s}));var a=i(324),r=i.n(a);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o=i(327),s=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"init",(function(){i.wavesurfer=o.create({barGap:i.config.barGap,barWidth:i.config.barWidth,barHeight:i.config.barHeight,container:i.player,cursorColor:i.config.cursorColor,cursorWidth:i.config.cursorWidth,progressColor:i.config.progressColor,skipLength:i.config.skipLength,waveColor:i.config.waveColor}),i.config.audioSource&&(i.wavesurfer.load(i.config.audioSource),i.wavesurfer.on("ready",(function(){i.duration=i.formatTimestamp(i.wavesurfer.getDuration()),i.progress.innerHTML="00:00 / ".concat(i.duration),i.attachEventListeners()})))})),n(this,"formatTimestamp",(function(e){e=Math.floor(e);var t=Math.floor(e/60);return e-=60*t,t=i.formatTimeUnits(t),e=i.formatTimeUnits(e),"".concat(t,":").concat(e)})),n(this,"formatTimeUnits",(function(e){return e<10?"0".concat(e):e})),n(this,"attachEventListeners",(function(){i.playPauseTriggers.length>0&&i.playPauseTriggers.forEach((function(e){e.addEventListener("click",i.playPause)})),i.skipBackwardTrigger.addEventListener("click",i.skipBackward),i.wavesurfer.on("audioprocess",i.audioProgress)})),n(this,"audioProgress",(function(e){i.progress.innerHTML="".concat(i.formatTimestamp(e)," / ").concat(i.duration)})),n(this,"playPause",(function(e){(r.a.check()||i.el.classList.contains("active"))&&(i.wavesurfer.playPause(),i.el.classList.toggle("playing"),i.el.classList.contains("active")||(i.el.classList.add("active"),i.pushToDataLayer()),r.a.toggle()),e.preventDefault()})),n(this,"skipBackward",(function(e){i.wavesurfer.skipBackward(),e.preventDefault()})),n(this,"pushToDataLayer",(function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"dataLayer push event",event_category:"Audio",event_action:i.player.dataset.audioTitle||"Audio Title",event_label:"Play"})})),this.el=t,this.player=this.el.querySelector("[data-audio-player]"),this.progress=this.el.querySelector("[data-audio-progress]"),this.playPauseTriggers=this.el.querySelectorAll("[data-audio-play-pause]"),this.skipBackwardTrigger=this.el.querySelector("[data-audio-skip-backward]"),this.config={audioSource:this.player.dataset.audioSource||null,barGap:1,barWidth:2,barHeight:.75,cursorColor:"#161616",cursorWidth:2,progressColor:"#dadada",skipLength:10,waveColor:"#35beff"},this.init()}},123:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return o}));var a=i(324),r=i.n(a);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"attachEventListeners",(function(){i.trigger.addEventListener("click",i.play)})),n(this,"play",(function(e){r.a.check()&&(i.iframe.src+=i.iframe.src.includes("?")?"&autoplay=1":"?autoplay=1",i.el.classList.contains("active")||(i.el.classList.add("active"),i.pushToDataLayer()),r.a.toggle()),e.preventDefault()})),n(this,"pushToDataLayer",(function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"dataLayer push event",event_category:"Video",event_action:i.player.dataset.videoTitle||"Video Title",event_label:"Play"})})),this.el=t,this.iframe=this.el.querySelector("iframe"),this.trigger=this.el.querySelector("[data-video-play]"),this.trigger&&this.attachEventListeners()}},126:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return o}));var a=i(122),r=i(123);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"attachEventListeners",(function(){i.trigger.addEventListener("click",i.onClick)})),n(this,"onClick",(function(e){e.preventDefault(),i.xhrRequest(i.trigger.getAttribute("href"))})),n(this,"initModules",(function(e,t,i){e.querySelectorAll(t).forEach((function(e){new i.default(e)}))})),n(this,"xhrRequest",(function(e){var t=new XMLHttpRequest;t.open("GET",e,!1),t.send(null),(new DOMParser).parseFromString(t.responseText,"text/html").querySelectorAll("body > div").forEach((function(e){i.container.appendChild(e),i.initModules(e,'[data-module="video"]',r),i.initModules(e,'[data-module="audio"]',a)})),i.paginate(e)})),n(this,"paginate",(function(e){i.index<i.itemsCount?(e=e.replace("/".concat(i.index.toString(),"/"),"/".concat((i.index+1).toString(),"/")),i.trigger.setAttribute("href",e),i.index++):i.trigger.remove()})),this.el=t,this.container=this.el.querySelector("[data-infinite-scroll-container]"),this.trigger=this.el.querySelector("[data-infinite-scroll-trigger]"),this.itemsCount=this.el.dataset.infiniteScrollCount||1,this.index=2,this.itemsCount>1&&this.attachEventListeners()}},324:function(e,t){e.exports={toggle:function(e,t){void 0!==window.activeMedia&&(window.activeMedia=!1),window.activeMedia=!window.activeMedia},check:function(){return!window.activeMedia}}}}]);