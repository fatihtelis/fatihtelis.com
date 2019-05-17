webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/screens/contact/index.js":
/*!****************************************!*\
  !*** ./pages/screens/contact/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rebass/grid */ "./node_modules/@rebass/grid/dist/index.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Section */ "./components/Section.js");
/* harmony import */ var _contact_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.json */ "./pages/screens/contact/contact.json");
var _contact_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contact.json */ "./pages/screens/contact/contact.json", 1);
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../style/theme */ "./style/theme.js");
var _jsxFileName = "C:\\Users\\Fatih Telis\\Desktop\\fatihtelis.com\\fatihtelis.com\\pages\\screens\\contact\\index.js";








var animation;

var Contact = function Contact(_ref) {
  var active = _ref.active;
  var icons = Array.from({
    length: _contact_json__WEBPACK_IMPORTED_MODULE_5__.length
  }, function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  });

  var animate = function animate() {
    animation = new gsap__WEBPACK_IMPORTED_MODULE_3__["TimelineMax"]({
      paused: true
    }).staggerTo(icons.map(function (i) {
      return i.current;
    }), 1, {
      top: 0,
      opacity: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Elastic"].easeOut,
      delay: 0.6
    }, 0.25);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    animate();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (active) {
      animation.play().timeScale(1);
    } else {
      animation.reverse().timeScale(10);
    }
  }, [active]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outer, {
    active: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "screen",
    flexDirection: "column",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "You can contact with me from..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, _contact_json__WEBPACK_IMPORTED_MODULE_5__.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      ref: icons[index],
      href: item.link,
      key: item.link,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "bx ".concat(item.icon),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }));
  }))));
};

var Outer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "contact__Outer",
  componentId: "sc-18ouy1-0"
})([".screen{", ";padding:40px 0;h2{font-weight:700;margin-bottom:15px;width:100%;text-align:center;}a{position:relative;top:40px;opacity:0;font-size:36px;color:white;margin:0 10px;}}"], _style_theme__WEBPACK_IMPORTED_MODULE_6__["container"]);
/* harmony default export */ __webpack_exports__["default"] = (Contact);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/screens\\contact\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.135963fb314d0345269f.hot-update.js.map