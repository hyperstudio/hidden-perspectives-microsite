webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/theme/dark/color.js":
/*!*********************************!*\
  !*** ./lib/theme/dark/color.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors */ "./lib/theme/colors.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  // Accent Colors
  primary: _colors__WEBPACK_IMPORTED_MODULE_0__["yellow"][500],
  // Typography
  typoPrimary: '#fff',
  typoSecondary: '#6F767D',
  typoTertiary: '#77777c'
});

/***/ }),

/***/ "./lib/theme/dark/index.js":
/*!*********************************!*\
  !*** ./lib/theme/dark/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shadow */ "./lib/theme/shadow.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breakpoints */ "./lib/theme/breakpoints.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation */ "./lib/theme/animation.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ "./lib/theme/dark/color.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  shadow: _shadow__WEBPACK_IMPORTED_MODULE_0__["default"],
  breakpoints: _breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"],
  color: _color__WEBPACK_IMPORTED_MODULE_3__["default"],
  animation: _animation__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./lib/theme/index.js":
/*!****************************!*\
  !*** ./lib/theme/index.js ***!
  \****************************/
/*! exports provided: default, light, dark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./light */ "./lib/theme/light/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "light", function() { return _light__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dark */ "./lib/theme/dark/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return _dark__WEBPACK_IMPORTED_MODULE_1__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_light__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

})
//# sourceMappingURL=_app.js.2a801aa13961cf959c73.hot-update.js.map