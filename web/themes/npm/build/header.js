(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["header"],{

/***/ "./web/themes/npm/assets/scripts/modules/header.js":
/*!*********************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/header.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _utilities_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/debounce */ \"./web/themes/npm/assets/scripts/utilities/debounce.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Header = function Header(el) {\n  var _this = this;\n\n  _classCallCheck(this, Header);\n\n  _defineProperty(this, \"attachEventListeners\", function () {\n    window.addEventListener('scroll', Object(_utilities_debounce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n      _this.checkPosition();\n    }, 50));\n  });\n\n  _defineProperty(this, \"checkPosition\", function () {\n    var position = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);\n    position && position > 10 ? _this.el.classList.add('stuck') : _this.el.classList.remove('stuck');\n  });\n\n  this.el = el;\n  this.attachEventListeners();\n};\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/header.js?");

/***/ }),

/***/ "./web/themes/npm/assets/scripts/utilities/debounce.js":
/*!*************************************************************!*\
  !*** ./web/themes/npm/assets/scripts/utilities/debounce.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (callback, wait) {\n  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var timeout = null;\n  return function () {\n    var _this = this,\n        _arguments = arguments;\n\n    var now = immediate && !timeout;\n\n    var next = function next() {\n      return callback.apply(_this, _arguments);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(next, wait);\n\n    if (now) {\n      next();\n    }\n  };\n});\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/utilities/debounce.js?");

/***/ })

}]);