webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rebass/grid */ "./node_modules/@rebass/grid/dist/index.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout */ "./layout/index.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens */ "./pages/screens/index.js");
/* harmony import */ var _components_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BackgroundAnimation */ "./components/BackgroundAnimation.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/theme */ "./style/theme.js");
var _jsxFileName = "/Users/fabrikamedya/Work/portfolio/pages/index.js";


function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 160px;\n    height: 160px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      padding: 2.55px 0;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n    align-items: flex-end;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      font-size: 12px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      font-size: 28px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      align-items: flex-start;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var screens = ['about', 'portfolio', 'contact', 'cv'];

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeScreen = _useState2[0],
      setActiveScreen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    meta: {
      title: 'fatih telis | frontend developer based in Turkey'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navigation, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      light: activeScreen
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_theme__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    className: "logo",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "fatih telis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "frontend developer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      selected: activeScreen
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, screens.map(function (screen) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: screen,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: activeScreen === screen
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: function onClick() {
        if (!activeScreen) {
          setActiveScreen(screen);
        } else {
          setActiveScreen(null);
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, screen, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('bx', 'bx-x', {
        active: activeScreen === screen
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })));
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activeScreen: activeScreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeScreen: activeScreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageCurl, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: !activeScreen
    }),
    href: "https://github.com/fatihtelis/fatihtelis.com",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))));
};

var Navigation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "pages__Navigation",
  componentId: "mwjthg-0"
})(["position:fixed;left:0;top:0;right:0;height:100px;z-index:200;.container{display:flex;justify-content:space-between;align-items:center;height:100%;", ";}&.light{color:white;.logo{transition:0.3s 0.3s;}}"], _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].phone(_templateObject()));
var Logo = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"]).withConfig({
  displayName: "pages__Logo",
  componentId: "mwjthg-1"
})(["transition:0.3s;line-height:1;white-space:nowrap;.name{font-size:32px;", ";}.title{font-size:14px;font-weight:300;letter-spacing:0.6px;", ";}"], _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].phone(_templateObject2()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].phone(_templateObject3()));
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "pages__Menu",
  componentId: "mwjthg-2"
})(["padding-left:0;display:flex;align-items:center;padding:0;margin:0;", ";li{list-style-type:none;padding:0 30px;transition:0.3s;transform-origin:center;display:flex;align-items:center;justify-content:flex-end;font-size:18px;", ";button{position:relative;background-color:transparent;border:none;outline:unset;display:flex;cursor:pointer;transition:0.3s;.bx{position:absolute;right:-5px;top:-5px;font-size:12px;opacity:0;&.active{opacity:1;}}}}&.selected{li{transition:0.6s;&:not(.active){opacity:0.5;cursor:not-allowed;text-decoration:line-through;button{pointer-events:none;}}&.active{opacity:1;transform:scale(1.2);}button{color:white;transition:0.3s 0.3s;}}}"], _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].phone(_templateObject4()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].phone(_templateObject5()));
var PageCurl = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "pages__PageCurl",
  componentId: "mwjthg-3"
})(["position:absolute;bottom:0;right:0;width:200px;height:200px;z-index:120;opacity:0;pointer-events:none;transition:0.2s;cursor:alias;", ";.fold{", ";background:url('/static/page-curl/fold.png') center/contain no-repeat;z-index:2;}.code{", ";background:url('/static/page-curl/code.png') center/contain no-repeat;z-index:1;}&.active{opacity:1;pointer-events:visible;}"], _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject6()), Object(_style_theme__WEBPACK_IMPORTED_MODULE_7__["cover"])(), Object(_style_theme__WEBPACK_IMPORTED_MODULE_7__["cover"])());
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "pages__Main",
  componentId: "mwjthg-4"
})(["width:100%;height:100vh;background-color:white;display:flex;justify-content:center;align-items:center;position:relative;"]);
/* harmony default export */ __webpack_exports__["default"] = (Home);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.bc7155e10061018e4859.hot-update.js.map