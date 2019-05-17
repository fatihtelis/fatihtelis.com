webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Section.js":
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rebass/grid */ "./node_modules/@rebass/grid/dist/index.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rebass_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/theme */ "./style/theme.js");



var Section = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_rebass_grid__WEBPACK_IMPORTED_MODULE_1__["Flex"]).attrs({
  as: 'section'
}).withConfig({
  displayName: "Section",
  componentId: "sc-6ahkvl-0"
})(["", ";opacity:", ";pointer-events:", ";transition:", ";color:white;"], Object(_style_theme__WEBPACK_IMPORTED_MODULE_2__["cover"])(), function (props) {
  return props.active ? '1' : '0';
}, function (props) {
  return props.active ? 'visible' : 'none';
}, function (props) {
  return props.active ? '1s 0.4s' : '0.1s';
});
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/Wrappers.js":
false,

/***/ "./pages/screens/about/index.js":
/*!**************************************!*\
  !*** ./pages/screens/about/index.js ***!
  \**************************************/
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
/* harmony import */ var _components_AboutItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/AboutItem */ "./components/AboutItem.js");
/* harmony import */ var _about_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.json */ "./pages/screens/about/about.json");
var _about_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./about.json */ "./pages/screens/about/about.json", 1);
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../style/theme */ "./style/theme.js");
var _jsxFileName = "C:\\Users\\Fatih Telis\\Desktop\\fatihtelis.com\\fatihtelis.com\\pages\\screens\\about\\index.js";


function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n              left: -30px;\n              right: unset;\n            "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n              width: 15px;\n              right: 100%;\n              left: unset;\n            "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            margin: 20px 0 0 20px;\n          "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n              left: -20px;\n            "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n              width: 15px;\n            "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            margin: 20px 0 0 20px;\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          width: 100%;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          left: 0;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        margin: 0px auto 20px;\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var animation;

var About = function About(_ref) {
  var active = _ref.active;
  var items = Array.from({
    length: _about_json__WEBPACK_IMPORTED_MODULE_6__.length
  }, function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  });

  var animate = function animate() {
    animation = new gsap__WEBPACK_IMPORTED_MODULE_3__["TimelineMax"]({
      paused: true
    }).staggerTo(items.map(function (i) {
      return i.current;
    }), 0.3, {
      opacity: 1,
      bottom: 0,
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power1"].easeInOut,
      delay: 0.5
    }, 0.05);
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
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "screen",
    flexDirection: "column",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Who Am I?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "about",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _about_json__WEBPACK_IMPORTED_MODULE_6__.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      innerRef: items[index],
      data: item,
      key: item.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    });
  }))));
};

var Outer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "about__Outer",
  componentId: "sc-19kwd5u-0"
})([".screen{", ";h2{font-size:36px;text-align:center;margin:0px auto 40px;", ";}.about{position:relative;width:100%;max-width:1000px;&::before{content:'';position:absolute;width:0;height:calc(100% + 40px);left:50%;border-left:1px dashed white;", ";}.about-item{width:calc(50% - 40px);position:relative;opacity:0;bottom:-100px;", ";&:nth-child(2n){margin:100px 0 0 40px;", ";&:before{content:'';position:absolute;right:100%;top:50%;width:35px;height:1px;background-color:white;", ";}&::after{content:'';position:absolute;left:-40px;top:50%;width:10px;height:10px;background-color:white;border-radius:50%;transform:translate(-50%,-50%);", ";}}&:nth-child(2n + 1){margin:0 40px 0 0;", ";&:before{content:'';position:absolute;left:100%;top:50%;width:35px;height:1px;background-color:white;", ";}&::after{content:'';position:absolute;right:-40px;top:50%;width:10px;height:10px;background-color:white;border-radius:50%;transform:translate(50%,-50%);", ";}}}}}"], _style_theme__WEBPACK_IMPORTED_MODULE_7__["container"], _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject2()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject3()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject4()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject5()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject6()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject7()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject8()), _style_theme__WEBPACK_IMPORTED_MODULE_7__["media"].tablet(_templateObject9()));
/* harmony default export */ __webpack_exports__["default"] = (About);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/screens\\about\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.124872c7476082199c80.hot-update.js.map