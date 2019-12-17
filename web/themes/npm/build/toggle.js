(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toggle"],{

/***/ "./web/themes/npm/assets/scripts/modules/toggle.js":
/*!*********************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/toggle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toggle; });\n/* harmony import */ var _utilities_aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/aria */ \"./web/themes/npm/assets/scripts/utilities/aria.js\");\n/* harmony import */ var _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_aria__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Toggle = function Toggle(el) {\n  var _this = this;\n\n  _classCallCheck(this, Toggle);\n\n  _defineProperty(this, \"attachEventListeners\", function () {\n    _this.el.addEventListener('click', _this.onClick);\n\n    if (_this.partners) {\n      _this.partners.forEach(function (partner) {\n        partner.addEventListener('click', _this.onClick);\n      });\n    }\n  });\n\n  _defineProperty(this, \"onClick\", function (e) {\n    _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(_this.el, _this.target);\n    e.preventDefault();\n  });\n\n  this.el = el;\n  this.target = document.getElementById(this.el.getAttribute('aria-controls'));\n  this.partners = this.el.dataset.togglePartners ? document.querySelectorAll(\"[data-toggle-partner=\\\"\".concat(this.el.dataset.togglePartners, \"\\\"]\")) : null;\n  this.attachEventListeners();\n};\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/toggle.js?");

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