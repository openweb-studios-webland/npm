(window.webpackJsonp=window.webpackJsonp||[]).push([[3,1,13],{122:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return u}));var a=i(326),n=i.n(a),r=i(327),o=i.n(r);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c=i(329),u=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"init",(function(){i.waveSurfer=c.create({audioContext:{},backend:"MediaElement",barGap:i.config.barGap,barWidth:i.config.barWidth,barHeight:i.config.barHeight,container:i.player,cursorColor:i.config.cursorColor,cursorWidth:i.config.cursorWidth,progressColor:i.config.progressColor,skipLength:i.config.skipLength,waveColor:i.config.waveColor}),i.config.audioSource&&(i.waveSurfer.load(i.config.audioSource),i.waveSurfer.on("ready",(function(){i.duration=i.formatTimestamp(i.waveSurfer.getDuration()),i.progress.innerHTML="00:00 / ".concat(i.duration),i.attachEventListeners()})))})),s(this,"formatTimestamp",(function(e){e=Math.floor(e);var t=Math.floor(e/60);return e-=60*t,t=i.formatTimeUnits(t),e=i.formatTimeUnits(e),"".concat(t,":").concat(e)})),s(this,"formatTimeUnits",(function(e){return e<10?"0".concat(e):e})),s(this,"attachEventListeners",(function(){i.playPauseTriggers.length>0&&i.playPauseTriggers.forEach((function(e){e.addEventListener("click",i.onPlayPause)})),i.skipBackwardTrigger.addEventListener("click",i.onSkipBackward),i.waveSurfer.on("audioprocess",i.onAudioProgress),i.waveSurfer.on("play",i.onPlay),i.waveSurfer.on("pause",i.onPause)})),s(this,"onAudioProgress",(function(e){i.progress.innerHTML="".concat(i.formatTimestamp(e)," / ").concat(i.duration)})),s(this,"onPlayPause",(function(){var e=n.a.get();void 0!==e?e.el===i.waveSurfer?i.waveSurfer.playPause():(n.a.stop(),i.waveSurfer.play()):i.waveSurfer.play()})),s(this,"onPlay",(function(){i.el.classList.add("active"),i.el.classList.add("playing"),n.a.set("audio",i.waveSurfer),o.a.push("Audio",i.el.dataset.audioTitle)})),s(this,"onPause",(function(){i.el.classList.remove("playing")})),s(this,"onSkipBackward",(function(e){i.waveSurfer.skipBackward(),e.preventDefault()})),this.el=t,this.player=this.el.querySelector("[data-audio-player]"),this.progress=this.el.querySelector("[data-audio-progress]"),this.playPauseTriggers=this.el.querySelectorAll("[data-audio-play-pause]"),this.skipBackwardTrigger=this.el.querySelector("[data-audio-skip-backward]"),this.active=!1,this.config={audioSource:this.player.dataset.audioSource||null,barGap:1,barWidth:2,barHeight:.75,cursorColor:"#161616",cursorWidth:2,progressColor:"#dadada",skipLength:10,waveColor:"#35beff"},this.init()}},123:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return c}));var a=i(326),n=i.n(a),r=i(327),o=i.n(r);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"attachEventListeners",(function(){i.trigger.addEventListener("click",i.onPlay)})),s(this,"onPlay",(function(e){i.el.classList.contains("active")||(i.el.classList.add("active"),o.a.push("Video",i.el.dataset.videoTitle)),n.a.stop(),n.a.set("video",i.iframe),n.a.play(),e.preventDefault()})),this.el=t,this.iframe=this.el.querySelector("iframe"),this.trigger=this.el.querySelector("[data-video-play]"),this.trigger&&this.attachEventListeners()}},124:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return o}));var a=i(122),n=i(123);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"attachEventListeners",(function(){i.trigger.addEventListener("click",i.onClick)})),r(this,"onClick",(function(e){e.preventDefault(),i.xhrRequest(i.trigger.getAttribute("href"))})),r(this,"initModules",(function(e,t,i){e.querySelectorAll(t).forEach((function(e){new i.default(e)}))})),r(this,"xhrRequest",(function(e){var t=new XMLHttpRequest;t.open("GET",e,!1),t.send(null),(new DOMParser).parseFromString(t.responseText,"text/html").querySelectorAll("body > div").forEach((function(e){i.container.appendChild(e),i.initModules(e,'[data-module="video"]',n),i.initModules(e,'[data-module="audio"]',a)})),i.paginate(e)})),r(this,"paginate",(function(e){i.index<i.itemsCount?(e=e.replace("/".concat(i.index.toString(),"/"),"/".concat((i.index+1).toString(),"/")),i.trigger.setAttribute("href",e),i.index++):i.trigger.remove()})),this.el=t,this.container=this.el.querySelector("[data-infinite-scroll-container]"),this.trigger=this.el.querySelector("[data-infinite-scroll-trigger]"),this.itemsCount=this.el.dataset.infiniteScrollCount||1,this.index=2,this.itemsCount>1&&this.attachEventListeners()}},326:function(e,t){e.exports={set:function(e,t){window.activeMedia={type:e,el:t}},get:function(){return window.activeMedia},play:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.play();break;case"video":window.activeMedia.el.src.includes("autoplay=0")?window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=0","autoplay=1"):window.activeMedia.el.src+=window.activeMedia.el.src.includes("?")?"&autoplay=1":"?autoplay=1"}},pause:function(){void 0!==window.activeMedia&&window.activeMedia.el.pause()},stop:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.stop();break;case"video":window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=1","autoplay=0")}}}},327:function(e,t){e.exports={push:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unknown Title",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Play";window.dataLayer=window.dataLayer||[],dataLayer.push({event:"dataLayer push event",event_category:e,event_action:t,event_label:i})}}}}]);