(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-hash"],{

/***/ "./web/themes/npm/assets/scripts/modules/product-hash.js":
/*!***************************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/product-hash.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductHash; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ProductHash = function ProductHash(_el) {\n  var _this = this;\n\n  _classCallCheck(this, ProductHash);\n\n  _defineProperty(this, \"init\", function () {\n    var hash = location.hash.substring(1);\n\n    if (hash !== '') {\n      var el = document.getElementById(hash);\n\n      var siblings = _this.getSiblings(el);\n\n      _this.removeSiblings(siblings);\n    }\n  });\n\n  _defineProperty(this, \"getSiblings\", function (el) {\n    var siblings = [];\n    var sibling = el.parentNode.firstChild; // Loop through siblings and push to an array\n\n    while (sibling) {\n      if (sibling.nodeType === 1 && sibling !== el) {\n        siblings.push(sibling);\n      }\n\n      sibling = sibling.nextSibling;\n    }\n\n    return siblings;\n  });\n\n  _defineProperty(this, \"removeSiblings\", function (siblings) {\n    // Loop through and remove siblings from DOM\n    siblings.forEach(function (sibling) {\n      sibling.remove();\n    });\n  });\n\n  this.el = _el;\n  this.init();\n};\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/product-hash.js?");

/***/ })

}]);