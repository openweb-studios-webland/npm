(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal"],{

/***/ "./web/themes/npm/assets/scripts/modules/modal.js":
/*!********************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/modal.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var _utilities_aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/aria */ \"./web/themes/npm/assets/scripts/utilities/aria.js\");\n/* harmony import */ var _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_aria__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_active_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/active-media */ \"./web/themes/npm/assets/scripts/utilities/active-media.js\");\n/* harmony import */ var _utilities_active_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utilities_active_media__WEBPACK_IMPORTED_MODULE_1__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Modal =\n/*#__PURE__*/\nfunction () {\n  function Modal(el) {\n    var _this = this;\n\n    _classCallCheck(this, Modal);\n\n    _defineProperty(this, \"openModal\", function () {\n      _this.active = document.activeElement;\n      _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(_this.active, _this.el);\n\n      _this.setFocusToFirstElements();\n\n      _this.scrollLock();\n\n      _this.attachOpenEventListeners();\n\n      if (_this.audio) {\n        _this.playPauseAudio();\n      }\n\n      if (_this.video) {\n        _this.playVideo();\n      }\n    });\n\n    _defineProperty(this, \"closeModal\", function () {\n      _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(_this.active, _this.el);\n\n      _this.scrollLock(false);\n\n      _this.detachOpenEventListeners();\n\n      if (_this.audio && _this.audio.classList.contains('playing')) {\n        _this.playPauseAudio();\n      }\n\n      if (_this.video) {\n        _this.stopVideo();\n      }\n\n      if (_this.active) {\n        _this.active.focus();\n      }\n\n      if (_this.hasTransition) {\n        var onTransitionEnd = function onTransitionEnd() {\n          _this.el.classList.remove('open');\n\n          _this.el.removeEventListener('transitionend', onTransitionEnd, false);\n        };\n\n        _this.el.addEventListener('transitionend', onTransitionEnd, false);\n      } else {\n        _this.el.classList.remove('open');\n      }\n    });\n\n    _defineProperty(this, \"scrollLock\", function () {\n      var scrollLock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      var body = document.querySelector('body');\n      var header = document.querySelector('[data-module=\"header\"]');\n\n      if (scrollLock) {\n        body.classList.add('locked');\n        body.style.paddingTop = \"\".concat(header.offsetHeight, \"px\");\n      } else {\n        body.classList.remove('locked');\n        body.style.paddingTop = \"\";\n      }\n    });\n\n    _defineProperty(this, \"trapFocus\", function (e) {\n      if (!_this.el.contains(document.activeElement)) {\n        _this.setFocusToFirstElements();\n      } else {\n        var focusedElementIndex = focusableElements.indexOf(document.activeElement);\n\n        if (e.shiftKey && focusedElementIndex === 0) {\n          _this.setFocusToLastElement();\n\n          e.preventDefault();\n        }\n\n        if (!e.shiftKey && focusedElementIndex === focusableElements.length - 1) {\n          _this.setFocusToFirstElements();\n\n          e.preventDefault();\n        }\n      }\n    });\n\n    _defineProperty(this, \"setFocusToFirstElements\", function () {\n      var focusableElements = _this.getFocusableElements(_this.el);\n\n      if (focusableElements.length > 0) {\n        focusableElements[0].focus();\n      }\n    });\n\n    _defineProperty(this, \"setFocusToLastElement\", function () {\n      var focusableElements = _this.getFocusableElements(_this.el);\n\n      if (focusableElements.length > 0) {\n        focusableElements[focusableElements.length - 1].focus();\n      }\n    });\n\n    _defineProperty(this, \"attachEventListeners\", function () {\n      var triggers = _toConsumableArray(document.querySelectorAll(\"[aria-controls=\\\"\".concat(_this.el.id, \"\\\"]\")));\n\n      if (triggers.length > 0) {\n        triggers.forEach(function (trigger) {\n          trigger.addEventListener('click', _this.openModal);\n        });\n      }\n    });\n\n    _defineProperty(this, \"attachOpenEventListeners\", function () {\n      _this.el.addEventListener('click', _this.onClick);\n\n      document.addEventListener('keyup', _this.onKeyup);\n    });\n\n    _defineProperty(this, \"detachOpenEventListeners\", function () {\n      _this.el.removeEventListener('click', _this.onClick);\n\n      document.removeEventListener('keyup', _this.onKeyup);\n    });\n\n    _defineProperty(this, \"onClick\", function (e) {\n      if (e.target.hasAttribute('data-modal-close') && e.target.closest('[data-module=\"modal\"]') === _this.el) {\n        _this.closeModal();\n\n        e.preventDefault();\n      }\n    });\n\n    _defineProperty(this, \"onKeyup\", function (e) {\n      if (e.key === 'Escape' || e.keyCode === 27) {\n        _this.closeModal();\n      }\n\n      if (e.key === 'Tab' || e.keyCode === 9) {\n        _this.trapFocus(e);\n      }\n    });\n\n    _defineProperty(this, \"getAudio\", function () {\n      return _this.el.querySelector('[data-module=\"audio\"]');\n    });\n\n    _defineProperty(this, \"playPauseAudio\", function () {\n      var playPauseTrigger = _this.audio.querySelector('[data-audio-play-pause]');\n\n      playPauseTrigger.click();\n    });\n\n    _defineProperty(this, \"getVideo\", function () {\n      var video = _this.el.querySelector('iframe');\n\n      return video && (video.src.includes('youtube') || video.src.includes('vimeo')) ? video : null;\n    });\n\n    _defineProperty(this, \"playVideo\", function () {\n      _this.video.src += _this.video.src.includes('?') ? '&autoplay=1' : '?autoplay=1';\n      _utilities_active_media__WEBPACK_IMPORTED_MODULE_1___default.a.toggle();\n    });\n\n    _defineProperty(this, \"stopVideo\", function () {\n      _this.video.src = _this.video.src.replace('autoplay=1', 'autoplay=0');\n      _utilities_active_media__WEBPACK_IMPORTED_MODULE_1___default.a.toggle();\n    });\n\n    this.el = el;\n    this.audio = this.getAudio();\n    this.video = this.getVideo();\n    this.hasTransition = false;\n    this.attachEventListeners();\n  }\n\n  _createClass(Modal, [{\n    key: \"getFocusableElements\",\n    value: function getFocusableElements(element) {\n      var focusableSelectors = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=\"hidden\"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^=\"-\"])'];\n      return _toConsumableArray(element.querySelectorAll(focusableSelectors));\n    }\n  }]);\n\n  return Modal;\n}();\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/modal.js?");

/***/ }),

/***/ "./web/themes/npm/assets/scripts/utilities/active-media.js":
/*!*****************************************************************!*\
  !*** ./web/themes/npm/assets/scripts/utilities/active-media.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  toggle: function toggle(trigger, target) {\n    if (typeof window.activeMedia !== 'undefined') {\n      window.activeMedia = false;\n    }\n\n    window.activeMedia = !window.activeMedia;\n  },\n  check: function check() {\n    return !window.activeMedia;\n  }\n};\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/utilities/active-media.js?");

/***/ }),

/***/ "./web/themes/npm/assets/scripts/utilities/aria.js":
/*!*********************************************************!*\
  !*** ./web/themes/npm/assets/scripts/utilities/aria.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  toggle: function toggle(trigger, target) {\n    var isExpanded = target.hasAttribute('aria-hidden') ? false : true;\n    trigger.setAttribute('aria-expanded', !isExpanded);\n\n    if (isExpanded) {\n      target.setAttribute('aria-hidden', true);\n    } else {\n      target.removeAttribute('aria-hidden');\n      target.focus();\n    }\n  }\n};\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/utilities/aria.js?");

/***/ })

}]);