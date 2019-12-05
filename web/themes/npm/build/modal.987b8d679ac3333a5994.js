(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{125:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return d}));var n=i(325),a=i.n(n),o=i(326),r=i.n(o);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d=function(){function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"openModal",(function(){i.active=document.activeElement,r.a.toggle(i.active,i.el),i.setFocusToFirstElements(),i.scrollLock(),i.attachOpenEventListeners(),(i.audioPlayer||i.videoPlayer)&&a.a.stop(),i.audioPlayer&&i.audioPlayer.click(),i.videoPlayer&&(a.a.set("video",i.videoPlayer),a.a.play())})),l(this,"closeModal",(function(){if(r.a.toggle(i.active,i.el),i.scrollLock(!1),i.detachOpenEventListeners(),(i.audioPlayer||i.videoPlayer)&&a.a.stop(),i.active&&i.active.focus(),i.hasTransition){i.el.addEventListener("transitionend",(function e(){i.el.classList.remove("open"),i.el.removeEventListener("transitionend",e,!1)}),!1)}else i.el.classList.remove("open")})),l(this,"scrollLock",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.querySelector("body"),i=document.querySelector('[data-module="header"]');e?(t.classList.add("locked"),t.style.paddingTop="".concat(i.offsetHeight,"px")):(t.classList.remove("locked"),t.style.paddingTop="")})),l(this,"trapFocus",(function(e){if(i.el.contains(document.activeElement)){var t=focusableElements.indexOf(document.activeElement);e.shiftKey&&0===t&&(i.setFocusToLastElement(),e.preventDefault()),e.shiftKey||t!==focusableElements.length-1||(i.setFocusToFirstElements(),e.preventDefault())}else i.setFocusToFirstElements()})),l(this,"setFocusToFirstElements",(function(){var e=i.getFocusableElements(i.el);e.length>0&&e[0].focus()})),l(this,"setFocusToLastElement",(function(){var e=i.getFocusableElements(i.el);e.length>0&&e[e.length-1].focus()})),l(this,"attachEventListeners",(function(){var e=c(document.querySelectorAll('[aria-controls="'.concat(i.el.id,'"]')));e.length>0&&e.forEach((function(e){e.addEventListener("click",i.openModal)}))})),l(this,"attachOpenEventListeners",(function(){i.el.addEventListener("click",i.onClick),document.addEventListener("keyup",i.onKeyup)})),l(this,"detachOpenEventListeners",(function(){i.el.removeEventListener("click",i.onClick),document.removeEventListener("keyup",i.onKeyup)})),l(this,"onClick",(function(e){e.target.hasAttribute("data-modal-close")&&e.target.closest('[data-module="modal"]')===i.el&&(i.closeModal(),e.preventDefault())})),l(this,"onKeyup",(function(e){"Escape"!==e.key&&27!==e.keyCode||i.closeModal(),"Tab"!==e.key&&9!==e.keyCode||i.trapFocus(e)})),l(this,"getAudioPlayer",(function(){return i.el.querySelector('[data-module="audio"] [data-audio-play-pause]')})),l(this,"getVideoPayer",(function(){var e=i.el.querySelector("iframe");return e&&(e.src.includes("youtube")||e.src.includes("vimeo"))?e:null})),this.el=t,this.audioPlayer=this.getAudioPlayer(),this.videoPlayer=this.getVideoPayer(),this.hasTransition=!1,this.attachEventListeners()}var t,i,n;return t=e,(i=[{key:"getFocusableElements",value:function(e){return c(e.querySelectorAll(["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])']))}}])&&s(t.prototype,i),n&&s(t,n),e}()},325:function(e,t){e.exports={set:function(e,t){window.activeMedia={type:e,el:t}},get:function(){return window.activeMedia},play:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.play();break;case"video":window.activeMedia.el.src.includes("autoplay=0")?window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=0","autoplay=1"):window.activeMedia.el.src+=window.activeMedia.el.src.includes("?")?"&autoplay=1":"?autoplay=1"}},pause:function(){void 0!==window.activeMedia&&window.activeMedia.el.pause()},stop:function(){if(void 0!==window.activeMedia)switch(window.activeMedia.type){case"audio":window.activeMedia.el.stop();break;case"video":window.activeMedia.el.src=window.activeMedia.el.src.replace("autoplay=1","autoplay=0")}}}},326:function(e,t){e.exports={toggle:function(e,t){var i=!t.hasAttribute("aria-hidden");e.setAttribute("aria-expanded",!i),i?t.setAttribute("aria-hidden",!0):(t.removeAttribute("aria-hidden"),t.focus())}}}}]);