(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video"],{

/***/ "./web/themes/npm/assets/scripts/modules/video.js":
/*!********************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/video.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Video; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Video = function Video(el) {\n  var _this = this;\n\n  _classCallCheck(this, Video);\n\n  _defineProperty(this, \"attachEventListeners\", function () {\n    _this.trigger.addEventListener('click', _this.play);\n  });\n\n  _defineProperty(this, \"play\", function (e) {\n    _this.iframe.src += _this.iframe.src.includes('?') ? '&autoplay=1' : '?autoplay=1';\n\n    if (!_this.el.classList.contains('active')) {\n      _this.el.classList.add('active');\n\n      _this.pushToDataLayer();\n    }\n\n    e.preventDefault();\n  });\n\n  _defineProperty(this, \"pushToDataLayer\", function () {\n    window.dataLayer = window.dataLayer || [];\n    dataLayer.push({\n      event: 'dataLayer push event',\n      event_category: 'Video',\n      event_action: _this.player.dataset.videoTitle || 'Video Title',\n      event_label: 'Play'\n    });\n  });\n\n  this.el = el;\n  this.iframe = this.el.querySelector('iframe');\n  this.trigger = this.el.querySelector('[data-video-play]');\n\n  if (this.trigger) {\n    this.attachEventListeners();\n  }\n};\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/video.js?");

/***/ })

}]);