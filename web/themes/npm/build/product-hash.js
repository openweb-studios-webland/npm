(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-hash"],{

/***/ "./web/themes/npm/assets/scripts/modules/product-hash.js":
/*!***************************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/product-hash.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductHash; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ProductHash = function ProductHash(el) {\n  var _this = this;\n\n  _classCallCheck(this, ProductHash);\n\n  _defineProperty(this, \"init\", function () {\n    var hash = location.hash.substring(1);\n\n    if (hash === '') {\n      return;\n    }\n\n    var product = _this.el.querySelector(\"[data-product-hash=\\\"\".concat(hash, \"\\\"]\"));\n\n    if (product) {\n      _this.redirect(product.querySelector('[href]').href);\n    }\n  });\n\n  _defineProperty(this, \"redirect\", function (url) {\n    window.location.replace(url);\n  });\n\n  this.el = el;\n  this.init();\n};\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/product-hash.js?");

/***/ })

}]);