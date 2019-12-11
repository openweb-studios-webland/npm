(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(325),i=n.n(a),o=n(327),r=n.n(o),c=n(326),s=n.n(c);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"openModal",(function(){n.active=document.activeElement,r.a.toggle(n.active,n.el),n.setFocusToFirstElements(),n.scrollLock(),n.attachOpenEventListeners(),(n.audioPlayer||n.videoPlayer)&&i.a.stop(),n.audioPlayer&&n.audioPlayer.click(),n.videoPlayer&&(i.a.set("video",n.videoPlayer),i.a.play(),s.a.push("Video",n.videoPlayer.parentNode.dataset.videoTitle))})),u(this,"closeModal",(function(){if(r.a.toggle(n.active,n.el),n.scrollLock(!1),n.detachOpenEventListeners(),(n.audioPlayer||n.videoPlayer)&&i.a.stop(),n.active&&n.active.focus(),n.hasTransition){n.el.addEventListener("transitionend",(function e(){n.el.classList.remove("open"),n.el.removeEventListener("transitionend",e,!1)}),!1)}else n.el.classList.remove("open")})),u(this,"scrollLock",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.querySelector("body");e?(t.classList.add("locked"),t.style.paddingTop="".concat(n.getHeight(document.querySelector('[data-module="header"]')),"px")):(t.classList.remove("locked"),t.style.paddingTop="")})),u(this,"getHeight",(function(e){var t=e.offsetHeight,n=getComputedStyle(e);return t+=parseInt(n.marginTop)+parseInt(n.marginBottom)})),u(this,"trapFocus",(function(e){if(n.el.contains(document.activeElement)){var t=focusableElements.indexOf(document.activeElement);e.shiftKey&&0===t&&(n.setFocusToLastElement(),e.preventDefault()),e.shiftKey||t!==focusableElements.length-1||(n.setFocusToFirstElements(),e.preventDefault())}else n.setFocusToFirstElements()})),u(this,"setFocusToFirstElements",(function(){var e=n.getFocusableElements(n.el);e.length>0&&e[0].focus()})),u(this,"setFocusToLastElement",(function(){var e=n.getFocusableElements(n.el);e.length>0&&e[e.length-1].focus()})),u(this,"attachEventListeners",(function(){var e=l(document.querySelectorAll('[aria-controls="'.concat(n.el.id,'"]')));e.length>0&&e.forEach((function(e){e.addEventListener("click",n.openModal)}))})),u(this,"attachOpenEventListeners",(function(){n.el.addEventListener("click",n.onClick),document.addEventListener("keyup",n.onKeyup)})),u(this,"detachOpenEventListeners",(function(){n.el.removeEventListener("click",n.onClick),document.removeEventListener("keyup",n.onKeyup)})),u(this,"onClick",(function(e){e.target.hasAttribute("data-modal-close")&&e.target.closest('[data-module="modal"]')===n.el&&(n.closeModal(),e.preventDefault())})),u(this,"onKeyup",(function(e){"Escape"!==e.key&&27!==e.keyCode||n.closeModal(),"Tab"!==e.key&&9!==e.keyCode||n.trapFocus(e)})),u(this,"getAudioPlayer",(function(){return n.el.querySelector('[data-module="audio"] [data-audio-play-pause]')})),u(this,"getVideoPayer",(function(){var e=n.el.querySelector("iframe");return e&&(e.src.includes("youtube")||e.src.includes("vimeo"))?e:null})),this.el=t,this.audioPlayer=this.getAudioPlayer(),this.videoPlayer=this.getVideoPayer(),this.hasTransition=!1,this.attachEventListeners()}var t,n,a;return t=e,(n=[{key:"getFocusableElements",value:function(e){return l(e.querySelectorAll(["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])']))}}])&&d(t.prototype,n),a&&d(t,a),e}()},325:function(e,t){e.exports={set:function(e,t){window.activeMedia={type:e,el:t}},get:function(){return window.activeMedia},play:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.play();break;case"video":window.activeMedia.el.src.includes("autoplay=0")?window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=0","autoplay=1"):window.activeMedia.el.src+=window.activeMedia.el.src.includes("?")?"&autoplay=1":"?autoplay=1"}},pause:function(){void 0!==window.activeMedia&&window.activeMedia.el.pause()},stop:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.stop();break;case"video":window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=1","autoplay=0")}}}},326:function(e,t){e.exports={push:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unknown Title",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Play";window.dataLayer=window.dataLayer||[],dataLayer.push({event:"dataLayer push event",event_category:e,event_action:t,event_label:n})}}},327:function(e,t){e.exports={toggle:function(e,t){var n=!t.hasAttribute("aria-hidden");e.setAttribute("aria-expanded",!n),n?t.setAttribute("aria-hidden",!0):(t.removeAttribute("aria-hidden"),t.focus())}}}}]);