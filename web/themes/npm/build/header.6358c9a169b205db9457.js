(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{125:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return o}));var i=e(338);function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var o=function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"attachEventListeners",(function(){window.addEventListener("scroll",Object(i.a)((function(){e.checkPosition()}),200))})),c(this,"checkPosition",(function(){var t=(window.pageYOffset||document.scrollTop)-(document.clientTop||0);t&&t>100?e.el.classList.add("stuck"):e.el.classList.remove("stuck")})),this.el=n,this.attachEventListeners()}},338:function(t,n,e){"use strict";n.a=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=null;return function(){var c=this,o=arguments,s=e&&!i,a=function(){return t.apply(c,o)};clearTimeout(i),i=setTimeout(a,n),s&&a()}}}}]);