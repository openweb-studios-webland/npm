(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs"],{

/***/ "./config/tailwindcss/plugins/aspect-ratio.js":
/*!****************************************************!*\
  !*** ./config/tailwindcss/plugins/aspect-ratio.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = function (_ref) {\n  var _ref$dimensions = _ref.dimensions,\n      dimensions = _ref$dimensions === void 0 ? [] : _ref$dimensions,\n      _ref$variants = _ref.variants,\n      variants = _ref$variants === void 0 ? [] : _ref$variants;\n  return function (_ref2) {\n    var addUtilities = _ref2.addUtilities,\n        e = _ref2.e;\n    var newUtilities = Object.keys(dimensions).map(function (key) {\n      return _defineProperty({}, \".aspect-ratio-\".concat(e(key)), {\n        height: 0,\n        paddingBottom: \"\".concat(dimensions[key][1] / dimensions[key][0] * 100, \"%\")\n      });\n    });\n    addUtilities(newUtilities, variants);\n  };\n};\n\n//# sourceURL=webpack:///./config/tailwindcss/plugins/aspect-ratio.js?");

/***/ }),

/***/ "./config/tailwindcss/plugins/transition.js":
/*!**************************************************!*\
  !*** ./config/tailwindcss/plugins/transition.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = function (_ref) {\n  var _ref$transitions = _ref.transitions,\n      transitions = _ref$transitions === void 0 ? [] : _ref$transitions,\n      _ref$variants = _ref.variants,\n      variants = _ref$variants === void 0 ? [] : _ref$variants;\n  return function (_ref2) {\n    var addUtilities = _ref2.addUtilities,\n        e = _ref2.e;\n    var newUtilities = Object.keys(transitions).map(function (key) {\n      var className = key === 'default' ? 'transition' : \"transition-\".concat(key);\n      return _defineProperty({}, \".\".concat(e(className)), {\n        transition: transitions[key]\n      });\n    });\n    addUtilities(newUtilities, variants);\n  };\n};\n\n//# sourceURL=webpack:///./config/tailwindcss/plugins/transition.js?");

/***/ }),

/***/ "./config/tailwindcss/tailwindcss.config.js":
/*!**************************************************!*\
  !*** ./config/tailwindcss/tailwindcss.config.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = {\n  prefix: '',\n  important: false,\n  separator: ':',\n  theme: {\n    screens: {\n      sm: '640px',\n      md: '768px',\n      lg: '1024px',\n      xl: '1280px',\n      max: '1200px'\n    },\n    colors: {\n      transparent: 'transparent',\n      black: {\n        'semi-opaque': 'rgba(22, 22, 22, 0.25)',\n        default: '#161616'\n      },\n      white: {\n        'semi-opaque': 'rgba(255, 255, 255, 0.25)',\n        default: '#fff'\n      },\n      crimson: '#db3053',\n      purple: '#161c58',\n      teal: '#0c8483',\n      blue: {\n        light: '#65bdff',\n        link: '#0a6eb9',\n        default: '#242c70'\n      },\n      gray: {\n        a11y: '#707070',\n        border: '#e1e1e1',\n        default: '#f4f4f4'\n      }\n    },\n    spacing: {\n      '0': '0',\n      '1': '0.0625rem',\n      '5': '0.3125rem',\n      '10': '0.625rem',\n      '15': '0.9375rem',\n      '20': '1.25rem',\n      '25': '1.5625rem',\n      '30': '1.875rem',\n      '40': '2.5rem',\n      '50': '3.125rem',\n      '60': '3.75rem',\n      '75': '4.6875rem',\n      '100': '6.25rem',\n      '150': '9.375rem',\n      '200': '12.5rem'\n    },\n    backgroundColor: function backgroundColor(theme) {\n      return theme('colors');\n    },\n    backgroundPosition: {\n      bottom: 'bottom',\n      center: 'center',\n      left: 'left',\n      'left-bottom': 'left bottom',\n      'left-top': 'left top',\n      right: 'right',\n      'right-bottom': 'right bottom',\n      'right-top': 'right top',\n      top: 'top'\n    },\n    backgroundSize: {\n      auto: 'auto',\n      cover: 'cover',\n      contain: 'contain'\n    },\n    borderColor: function borderColor(theme) {\n      return _objectSpread({}, theme('colors'), {\n        default: theme('colors.gray.border', 'currentColor')\n      });\n    },\n    borderRadius: {\n      none: '0',\n      full: '9999px',\n      default: '10px'\n    },\n    borderWidth: {\n      '0': '0',\n      '2': '2px',\n      default: '1px'\n    },\n    boxShadow: {\n      none: 'none',\n      xs: '0px 5px 10px rgba(0, 0, 0, 0.15)',\n      sm: '0px 20px 30px rgba(0, 0, 0, 0.15)',\n      md: '0px 10px 20px rgba(0, 0, 0, 0.25)',\n      lg: '0px 30px 40px rgba(0, 0, 0, 0.25)',\n      default: '0px 30px 30px rgba(0, 0, 0, 0.15)'\n    },\n    container: {},\n    cursor: {\n      auto: 'auto',\n      default: 'default',\n      pointer: 'pointer',\n      wait: 'wait',\n      text: 'text',\n      move: 'move',\n      'not-allowed': 'not-allowed'\n    },\n    fill: {\n      current: 'currentColor'\n    },\n    flex: {\n      none: 'none',\n      '0': '0 0 auto',\n      '1': '1 1 auto',\n      '1-1-0': '1 1 0'\n    },\n    flexGrow: {\n      '0': '0',\n      default: '1'\n    },\n    flexShrink: {\n      '0': '0',\n      default: '1'\n    },\n    fontFamily: {\n      sans: ['Gotham SSm', 'Gotham', 'Arial', 'sans-serif'],\n      serif: ['Georgia', 'Times', '\"Times New Roman\"', 'serif']\n    },\n    fontSize: {\n      '11': '0.6875rem',\n      '12': '0.75rem',\n      '14': '0.875rem',\n      '16': '1rem',\n      '18': '1.125rem',\n      '20': '1.25rem',\n      '22': '1.375rem',\n      '24': '1.5rem',\n      '30': '1.875rem',\n      '36': '2.25rem',\n      '42': '2.625rem',\n      '48': '3rem',\n      '64': '4rem',\n      '88': '5.5rem'\n    },\n    fontWeight: {\n      normal: '400',\n      bold: '700'\n    },\n    height: function height(theme) {\n      return {\n        auto: 'auto',\n        '0': '0',\n        '24': '1.5rem',\n        '44': '2.75rem',\n        '80': '5rem',\n        full: '100%',\n        screen: '100vh'\n      };\n    },\n    inset: {\n      '0': '0',\n      '1/2': '50%',\n      auto: 'auto'\n    },\n    letterSpacing: {\n      normal: '0',\n      wide: '0.1em'\n    },\n    lineHeight: {\n      none: '1',\n      tighter: '1.2',\n      tight: '1.4',\n      normal: '1.6'\n    },\n    listStyleType: {\n      none: 'none',\n      disc: 'disc',\n      decimal: 'decimal'\n    },\n    margin: function margin(theme, _ref) {\n      var negative = _ref.negative;\n      return _objectSpread({\n        auto: 'auto'\n      }, theme('spacing'), negative(theme('spacing')));\n    },\n    maxHeight: {\n      '0': '0',\n      none: 'none',\n      full: '100%',\n      screen: '100vh'\n    },\n    maxWidth: {\n      '0': '0',\n      none: 'none',\n      full: '100%',\n      screen: '100vw'\n    },\n    minHeight: {\n      '0': '0',\n      full: '100%',\n      screen: '100vh'\n    },\n    minWidth: {\n      '0': '0',\n      full: '100%'\n    },\n    objectPosition: {\n      bottom: 'bottom',\n      center: 'center',\n      left: 'left',\n      'left-bottom': 'left bottom',\n      'left-top': 'left top',\n      right: 'right',\n      'right-bottom': 'right bottom',\n      'right-top': 'right top',\n      top: 'top'\n    },\n    opacity: {\n      '0': '0',\n      '50': '0.5',\n      '90': '0.9',\n      '100': '1'\n    },\n    order: {\n      first: '-9999',\n      last: '9999',\n      none: '0'\n    },\n    padding: function padding(theme) {\n      return theme('spacing');\n    },\n    stroke: {\n      current: 'currentColor'\n    },\n    textColor: function textColor(theme) {\n      return theme('colors');\n    },\n    width: function width(theme) {\n      return {\n        auto: 'auto',\n        '1/4': '25%',\n        '1/3': '33.33333%',\n        '5/12': '41.66667%',\n        '1/2': '50%',\n        '7/12': '58.33333%',\n        '2/3': '66.66667%',\n        '3/4': '75%',\n        '24': '1.5rem',\n        '44': '2.75rem',\n        '80': '5rem',\n        full: '100%',\n        'screen-5/12': '41.66667vw',\n        'screen-1/2': '50vw',\n        'screen-7/12': '58.33333vw',\n        'screen-2/3': '66.66667vw',\n        screen: '100vw'\n      };\n    },\n    zIndex: {\n      auto: 'auto',\n      '0': '0',\n      '10': '10',\n      '20': '20',\n      '30': '30',\n      '40': '40',\n      '50': '50'\n    }\n  },\n  variants: {\n    alignContent: ['responsive'],\n    alignItems: ['responsive'],\n    alignSelf: ['responsive'],\n    appearance: false,\n    backgroundAttachment: false,\n    backgroundColor: ['responsive', 'hover', 'focus'],\n    backgroundPosition: [],\n    backgroundRepeat: [],\n    backgroundSize: [],\n    borderCollapse: false,\n    borderColor: ['hover', 'focus'],\n    borderRadius: [],\n    borderStyle: ['responsive'],\n    borderWidth: ['responsive'],\n    boxShadow: ['responsive', 'hover', 'focus'],\n    cursor: [],\n    display: ['responsive', 'hover', 'group-hover', 'focus'],\n    fill: [],\n    flex: ['responsive'],\n    flexDirection: ['responsive'],\n    flexGrow: ['responsive'],\n    flexShrink: ['responsive'],\n    flexWrap: ['responsive'],\n    float: ['responsive'],\n    fontFamily: [],\n    fontSize: ['responsive'],\n    fontSmoothing: false,\n    fontStyle: ['responsive'],\n    fontWeight: ['responsive'],\n    height: ['responsive'],\n    inset: ['responsive'],\n    justifyContent: ['responsive'],\n    letterSpacing: ['responsive'],\n    lineHeight: ['responsive'],\n    listStylePosition: false,\n    listStyleType: false,\n    margin: ['responsive'],\n    maxHeight: ['responsive'],\n    maxWidth: ['responsive'],\n    minHeight: ['responsive'],\n    minWidth: ['responsive'],\n    objectFit: false,\n    objectPosition: false,\n    opacity: ['responsive'],\n    order: ['responsive'],\n    outline: false,\n    overflow: ['responsive'],\n    padding: ['responsive'],\n    pointerEvents: [],\n    position: ['responsive'],\n    resize: false,\n    stroke: false,\n    tableLayout: false,\n    textAlign: ['responsive'],\n    textColor: ['responsive', 'hover', 'focus'],\n    textDecoration: ['responsive', 'hover', 'focus'],\n    textTransform: ['responsive'],\n    userSelect: false,\n    verticalAlign: [],\n    visibility: ['responsive'],\n    whitespace: [],\n    width: ['responsive'],\n    wordBreak: false,\n    zIndex: ['responsive']\n  },\n  corePlugins: {\n    container: false\n  },\n  plugins: [__webpack_require__(/*! ./plugins/aspect-ratio */ \"./config/tailwindcss/plugins/aspect-ratio.js\")({\n    dimensions: {\n      square: [1, 1],\n      '16/9': [16, 9],\n      '9/4': [9, 4]\n    },\n    variants: ['responsive']\n  }), __webpack_require__(/*! ./plugins/transition */ \"./config/tailwindcss/plugins/transition.js\")({\n    transitions: {\n      slow: 'all 0.4s ease',\n      fast: 'all 0.2s ease',\n      default: 'all 0.3s ease'\n    }\n  })]\n};\n\n//# sourceURL=webpack:///./config/tailwindcss/tailwindcss.config.js?");

/***/ }),

/***/ "./web/themes/npm/assets/scripts/modules/tabs.js":
/*!*******************************************************!*\
  !*** ./web/themes/npm/assets/scripts/modules/tabs.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tabs; });\n/* harmony import */ var _utilities_aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/aria */ \"./web/themes/npm/assets/scripts/utilities/aria.js\");\n/* harmony import */ var _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_aria__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/resolveConfig */ \"./node_modules/tailwindcss/resolveConfig.js\");\n/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_tailwindcss_tailwindcss_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../config/tailwindcss/tailwindcss.config.js */ \"./config/tailwindcss/tailwindcss.config.js\");\n/* harmony import */ var _config_tailwindcss_tailwindcss_config_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_tailwindcss_tailwindcss_config_js__WEBPACK_IMPORTED_MODULE_2__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Tabs = function Tabs(el) {\n  var _this = this;\n\n  _classCallCheck(this, Tabs);\n\n  _defineProperty(this, \"init\", function () {\n    for (var i = 0; i < _this.triggers.length; i++) {\n      _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(_this.triggers[i], _this.targets[i]);\n    }\n\n    _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(_this.triggers[_this.index], _this.targets[_this.index]);\n\n    _this.attachEventListeners();\n  });\n\n  _defineProperty(this, \"convertToAccordion\", function () {\n    if (_this.container) {\n      _this.targets.forEach(function (target) {\n        var trigger = _this.el.querySelector(\"[aria-controls=\\\"\".concat(target.id, \"\\\"]\"));\n\n        trigger.parentNode.appendChild(target);\n      });\n\n      _this.container.remove();\n    }\n  });\n\n  _defineProperty(this, \"convertToTabs\", function () {\n    _this.container = document.createElement('div');\n\n    _this.container.classList.add('tabs-targets');\n\n    _this.el.parentNode.insertBefore(_this.container, _this.el.nextSibling);\n\n    _this.targets.forEach(function (target) {\n      _this.container.appendChild(target);\n    });\n  });\n\n  _defineProperty(this, \"attachEventListeners\", function () {\n    if (_this.triggers.length > 0) {\n      _this.triggers.forEach(function (trigger) {\n        trigger.addEventListener('click', _this.onClick);\n      });\n    }\n\n    if (_this.config.tabsToAccordion) {\n      _this.mediaQuery.addListener(_this.matchMedia);\n\n      _this.matchMedia(_this.mediaQuery);\n    }\n  });\n\n  _defineProperty(this, \"onClick\", function (e) {\n    _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(_this.triggers[_this.index], _this.targets[_this.index]);\n    _this.index = _this.triggers.indexOf(e.currentTarget);\n    _utilities_aria__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(_this.triggers[_this.index], _this.targets[_this.index]);\n    e.preventDefault();\n  });\n\n  _defineProperty(this, \"matchMedia\", function (mq) {\n    if (mq.matches) {\n      _this.convertToTabs();\n    } else {\n      _this.convertToAccordion();\n    }\n  });\n\n  this.el = el;\n  this.triggers = _toConsumableArray(this.el.querySelectorAll('[data-tabs-trigger]'));\n  this.targets = _toConsumableArray(this.el.querySelectorAll('[data-tabs-target]'));\n  this.tailwindConfig = tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default()(_config_tailwindcss_tailwindcss_config_js__WEBPACK_IMPORTED_MODULE_2___default.a); // Tailwind CSS config variables\n\n  this.mediaQuery = window.matchMedia(\"(min-width: \".concat(this.tailwindConfig.theme.screens.lg, \")\"));\n  this.index = 0;\n  this.config = {\n    tabsToAccordion: this.el.dataset.tabsToAccordion === 'true' ? true : false\n  };\n  this.init();\n};\n\n\n\n//# sourceURL=webpack:///./web/themes/npm/assets/scripts/modules/tabs.js?");

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