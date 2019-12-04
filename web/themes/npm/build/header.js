(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["header"],{

/***/ "./web/themes/npm/assets/scripts/modules/header.js":
/*!*********************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/header.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _utilities_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/throttle */ \"./web/themes/npm/assets/scripts/utilities/throttle.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Header = function Header(el) {\n  var _this = this;\n\n  _classCallCheck(this, Header);\n\n  _defineProperty(this, \"attachEventListeners\", function () {\n    _this.trigger.addEventListener('click', function () {\n      var body = document.querySelector('body');\n      body.classList.toggle('locked');\n    });\n\n    window.addEventListener('scroll', Object(_utilities_throttle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n      _this.checkPosition();\n    }, 10));\n  });\n\n  _defineProperty(this, \"checkPosition\", function () {\n    var position = Math.floor((window.pageYOffset || document.scrollTop) - (document.clientTop || 0));\n    var buffer = document.querySelector('.admin-bar') ? 52 : 20;\n    position && position > buffer ? _this.el.classList.add('stuck') : _this.el.classList.remove('stuck');\n  });\n\n  this.el = el;\n  this.trigger = this.el.querySelector('[data-header-trigger]');\n  this.attachEventListeners();\n  this.checkPosition();\n};\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/header.js?");

/***/ }),

/***/ "./web/themes/npm/assets/scripts/utilities/throttle.js":
/*!*************************************************************!*\
  !*** ./web/themes/npm/assets/scripts/utilities/throttle.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (callback, wait) {\n  var prev = 0;\n  return function () {\n    var _this = this,\n        _arguments = arguments;\n\n    var now = Date.now();\n\n    var result = function result() {\n      return callback.apply(_this, _arguments);\n    };\n\n    if (now - prev < wait) {\n      return;\n    }\n\n    prev = now;\n    result();\n  };\n});\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/utilities/throttle.js?");

/***/ })

}]);