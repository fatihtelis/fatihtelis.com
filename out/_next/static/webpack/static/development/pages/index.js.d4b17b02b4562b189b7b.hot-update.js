webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/screens/cv/index.js":
/*!***********************************!*\
  !*** ./pages/screens/cv/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rebass/grid */ "./node_modules/@rebass/grid/dist/index.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rebass_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf */ "./node_modules/react-pdf/dist/entry.js");
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../style/theme */ "./style/theme.js");
var _jsxFileName = "/Users/fabrikamedya/Work/portfolio/pages/screens/cv/index.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






react_pdf__WEBPACK_IMPORTED_MODULE_2__["pdfjs"].GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(react_pdf__WEBPACK_IMPORTED_MODULE_2__["pdfjs"].version, "/pdf.worker.js");
var cv = '/static/cv/fatih-telis_cv.pdf';

var CV = function CV(_ref) {
  var active = _ref.active;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      scale = _useState2[0],
      setScale = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var windowHeight = window.innerHeight;
    var docHeight = 840;
    var newScale = (windowHeight - 360) / docHeight;
    setScale(newScale);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outer, {
    active: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    className: "screen",
    flexDirection: "column",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pdf__WEBPACK_IMPORTED_MODULE_2__["Document"], {
    file: cv,
    loading: "Loading CV...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pdf__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    pageNumber: 1,
    scale: scale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "download",
    href: cv,
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Fatih Telis CV",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Download CV"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bx bx-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))));
};

var Outer = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_rebass_grid__WEBPACK_IMPORTED_MODULE_1__["Flex"]).attrs({
  as: 'section'
}).withConfig({
  displayName: "cv__Outer",
  componentId: "tg2sa3-0"
})(["", ";opacity:", ";pointer-events:", ";transition:", ";color:white;.screen{", ";padding:40px 0;.download{display:flex;justify-content:center;align-items:center;height:40px;padding:0 20px;font-size:16px;font-weight:600;background-color:white;border-radius:3px;margin:30px auto;color:", ";text-decoration:none;.bx{margin:0 0 2px 10px;}}}"], Object(_style_theme__WEBPACK_IMPORTED_MODULE_4__["cover"])(), function (props) {
  return props.active ? '1' : '0';
}, function (props) {
  return props.active ? 'visible' : 'none';
}, function (props) {
  return props.active ? '1s 0.4s' : '0.1s';
}, _style_theme__WEBPACK_IMPORTED_MODULE_4__["container"], _style_theme__WEBPACK_IMPORTED_MODULE_4__["colors"].font);
/* harmony default export */ __webpack_exports__["default"] = (CV);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/screens/cv")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.d4b17b02b4562b189b7b.hot-update.js.map