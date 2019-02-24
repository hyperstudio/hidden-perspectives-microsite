webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Typography/index.js":
/*!****************************************!*\
  !*** ./components/Typography/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/Typography/styles.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");


var _jsxFileName = "/Users/ludwigfrank/Development/University/hidden-perspectives-microsite/components/Typography/index.js";





var variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};

var Typography = function Typography(_ref) {
  var type = _ref.type,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "children"]);

  var tag = variantMapping[type] || 'p';
  var Component = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(tag).withConfig({
    displayName: "Typography__Component",
    componentId: "jeep1m-0"
  })(["", ";", ";", ";"], _styles__WEBPACK_IMPORTED_MODULE_5__["default"][type], styled_system__WEBPACK_IMPORTED_MODULE_6__["space"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), " ", children, " ");
};

Typography.defaultProps = {
  type: 'body1',
  align: 'left'
};
Typography.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'center', 'right', 'inherit'])
};
/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ })

})
//# sourceMappingURL=index.js.aec31722e34756e5e9b4.hot-update.js.map