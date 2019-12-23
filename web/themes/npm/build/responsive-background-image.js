(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["responsive-background-image"],{

/***/ "./web/themes/npm/assets/scripts/modules/responsive-background-image.js":
/*!******************************************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/responsive-background-image.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResponsiveBackgroundImage; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ResponsiveBackgroundImage = function ResponsiveBackgroundImage(el) {\n  var _this = this;\n\n  _classCallCheck(this, ResponsiveBackgroundImage);\n\n  _defineProperty(this, \"attachEventListeners\", function () {\n    _this.image.addEventListener('load', _this.update);\n  });\n\n  _defineProperty(this, \"update\", function () {\n    var imageSrc = typeof _this.image.currentSrc !== 'undefined' ? _this.image.currentSrc : _this.image.src;\n\n    if (_this.imageSrc !== imageSrc) {\n      _this.imageSrc = imageSrc;\n      _this.el.style.backgroundImage = \"url(\\\"\".concat(_this.imageSrc, \"\\\")\");\n    }\n  });\n\n  this.el = el;\n  this.image = this.el.querySelector('img');\n  this.imageSrc = '';\n  this.attachEventListeners();\n\n  if (this.image.complete) {\n    this.update();\n  }\n};\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/responsive-background-image.js?");

/***/ })

}]);