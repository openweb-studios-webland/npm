(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video"],{

/***/ "./web/themes/npm/assets/scripts/modules/video.js":
/*!********************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/video.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Video; });\n/* harmony import */ var _utilities_active_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/active-media */ \"./web/themes/npm/assets/scripts/utilities/active-media.js\");\n/* harmony import */ var _utilities_active_media__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_active_media__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_data_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/data-layer */ \"./web/themes/npm/assets/scripts/utilities/data-layer.js\");\n/* harmony import */ var _utilities_data_layer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utilities_data_layer__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Video = function Video(el) {\n  var _this = this;\n\n  _classCallCheck(this, Video);\n\n  _defineProperty(this, \"attachEventListeners\", function () {\n    _this.trigger.addEventListener('click', _this.onPlay);\n  });\n\n  _defineProperty(this, \"onPlay\", function (e) {\n    if (!_this.el.classList.contains('active')) {\n      _this.el.classList.add('active');\n\n      _utilities_data_layer__WEBPACK_IMPORTED_MODULE_1___default.a.push('Video', _this.el.dataset.videoTitle);\n    }\n\n    _utilities_active_media__WEBPACK_IMPORTED_MODULE_0___default.a.stop();\n    _utilities_active_media__WEBPACK_IMPORTED_MODULE_0___default.a.set('video', _this.iframe);\n    _utilities_active_media__WEBPACK_IMPORTED_MODULE_0___default.a.play();\n    e.preventDefault();\n  });\n\n  this.el = el;\n  this.iframe = this.el.querySelector('iframe');\n  this.trigger = this.el.querySelector('[data-video-play]');\n\n  if (this.trigger) {\n    this.attachEventListeners();\n  }\n};\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/video.js?");

/***/ }),

/***/ "./web/themes/npm/assets/scripts/utilities/active-media.js":
/*!*****************************************************************!*\
  !*** ./web/themes/npm/assets/scripts/utilities/active-media.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  set: function set(type, el) {\n    window.activeMedia = {\n      type: type,\n      el: el\n    };\n  },\n  get: function get() {\n    return window.activeMedia;\n  },\n  play: function play() {\n    if (typeof window.activeMedia !== 'undefined') {\n      switch (window.activeMedia.type) {\n        case 'audio':\n          window.activeMedia.el.play();\n          break;\n\n        case 'video':\n          if (window.activeMedia.el.src.includes('autoplay=0')) {\n            window.activeMedia.el.src = window.activeMedia.el.src.replace('autoplay=0', 'autoplay=1');\n          } else {\n            window.activeMedia.el.src += window.activeMedia.el.src.includes('?') ? '&autoplay=1' : '?autoplay=1';\n          }\n\n          break;\n      }\n    }\n  },\n  pause: function pause() {\n    if (typeof window.activeMedia !== 'undefined') {\n      window.activeMedia.el.pause();\n    }\n  },\n  stop: function stop() {\n    if (typeof window.activeMedia !== 'undefined') {\n      switch (window.activeMedia.type) {\n        case 'audio':\n          window.activeMedia.el.stop();\n          break;\n\n        case 'video':\n          window.activeMedia.el.src = window.activeMedia.el.src.replace('autoplay=1', 'autoplay=0');\n          break;\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/utilities/active-media.js?");

/***/ }),

/***/ "./web/themes/npm/assets/scripts/utilities/data-layer.js":
/*!***************************************************************!*\
  !*** ./web/themes/npm/assets/scripts/utilities/data-layer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  push: function push(category) {\n    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown Title';\n    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Play';\n    window.dataLayer = window.dataLayer || [];\n    dataLayer.push({\n      event: 'dataLayer push event',\n      event_category: category,\n      event_action: action,\n      event_label: label\n    });\n  }\n};\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/utilities/data-layer.js?");

/***/ })

}]);