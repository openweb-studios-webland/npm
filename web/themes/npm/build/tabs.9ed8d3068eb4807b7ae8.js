(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{130:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var i=n(328),r=n.n(i);function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"init",(function(){for(var t=0;t<n.triggers.length;t++)r.a.toggle(n.triggers[t],n.targets[t]);r.a.toggle(n.triggers[n.index],n.targets[n.index]),n.attachEventListeners(),n.clickTriggerOnHash()})),o(this,"convertToAccordion",(function(){n.container&&(n.targets.forEach((function(t){n.el.querySelector('[aria-controls="'.concat(t.id,'"]')).parentNode.appendChild(t)})),n.container.remove())})),o(this,"convertToTabs",(function(){n.container=document.createElement("div"),n.container.classList.add("w-full","lg:w-2/3","xl:w-3/4"),n.el.parentNode.insertBefore(n.container,n.el.nextSibling),n.targets.forEach((function(t){n.container.appendChild(t)}))})),o(this,"clickTriggerOnHash",(function(){var t=location.hash;if(""!==t){t=t.split("#")[1];var e=n.el.querySelector('[aria-controls="'.concat(t,'"]'));e&&e.click()}})),o(this,"attachEventListeners",(function(){n.triggers.length>0&&n.triggers.forEach((function(t){t.addEventListener("click",n.onClick)})),n.config.tabsToAccordion&&(n.mq.addListener(n.matchMedia),n.matchMedia())})),o(this,"onClick",(function(t){var e=n.triggers.indexOf(t.currentTarget),i="".concat(location.protocol,"//").concat(location.host).concat(location.pathname);if(e!==n.index){"true"===n.triggers[n.index].getAttribute("aria-expanded")&&r.a.toggle(n.triggers[n.index],n.targets[n.index]),n.index=e,r.a.toggle(n.triggers[n.index],n.targets[n.index]);var a=n.triggers[n.index].getAttribute("aria-controls");i+="#".concat(a),history.pushState(null,null,i)}else n.config.tabsToAccordion&&!n.mq.matches&&(r.a.toggle(n.triggers[n.index],n.targets[n.index]),history.pushState(null,null,i));t.preventDefault()})),o(this,"matchMedia",(function(){n.mq.matches?n.convertToTabs():n.convertToAccordion()})),this.el=e,this.triggers=a(this.el.querySelectorAll("[data-tabs-trigger]")),this.targets=a(this.el.querySelectorAll("[data-tabs-target]")),this.mq=window.matchMedia("(min-width: 1024px)"),this.index=0,this.config={tabsToAccordion:"true"===this.el.dataset.tabsToAccordion},this.init()}},328:function(t,e){t.exports={toggle:function(t,e){var n=!e.hasAttribute("aria-hidden");t.setAttribute("aria-expanded",!n),n?e.setAttribute("aria-hidden",!0):(e.removeAttribute("aria-hidden"),e.focus())}}}}]);