webpackHotUpdate("static/development/pages/index.js",{

/***/ "./style/theme.js":
/*!************************!*\
  !*** ./style/theme.js ***!
  \************************/
/*! exports provided: colors, cover, media, container, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cover", function() { return cover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/fabrikamedya/Work/portfolio/style/theme.js";


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding:0 15px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding:0 20px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding:0 40px;\n    max-width:100%;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var colors = {
  font: '#2c3e50'
};
var cover = function cover() {
  return 'position:absolute; top: 0; bottom: 0; left: 0; right: 0;';
};
var sizes = {
  giant: 1460,
  desktop: 1280,
  tablet: 1024,
  phone: 768,
  mini: 414
};
var media = Object.keys(sizes).reduce(function (accumulator, label) {
  accumulator[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "px){", ";}"], sizes[label], styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  return accumulator;
}, {});
var container = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["max-width:1300px;width:100%;margin:auto;", ";", ";", ";"], media.giant(_templateObject()), media.tablet(_templateObject2()), media.mini(_templateObject3()));
var ContainerOuter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "theme__ContainerOuter",
  componentId: "sjm370-0"
})(["", ";"], container);
var Container = function Container(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerOuter, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('container', className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, children);
};

/***/ })

})
//# sourceMappingURL=index.js.1782b956e44d06bed141.hot-update.js.map