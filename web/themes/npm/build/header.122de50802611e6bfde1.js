(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{133:function(t,e,n){"use strict";n.r(e);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"default",(function(){return o}));var o=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"attachEventListeners",(function(){var t,e,i;n.trigger.addEventListener("click",(function(){n.body.classList.toggle("locked")})),window.addEventListener("scroll",(t=function(){n.checkPosition()},e=10,i=0,function(){var n=this,o=arguments,c=Date.now(),s=function(){return t.apply(n,o)};c-i<e||(i=c,s())}))})),i(this,"checkPosition",(function(){var t=Math.floor((window.pageYOffset||document.scrollTop)-(document.clientTop||0)),e=document.querySelector(".admin-bar")?52:20;t&&t>e?n.el.classList.add("stuck"):n.el.classList.remove("stuck")})),this.el=e,this.trigger=this.el.querySelector("[data-header-trigger]"),this.body=document.body,this.attachEventListeners(),this.checkPosition()}}}]);