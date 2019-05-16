webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/screens/portfolio/index.js":
/*!******************************************!*\
  !*** ./pages/screens/portfolio/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rebass/grid */ "./node_modules/@rebass/grid/dist/index.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_id_swiper_lib_ReactIdSwiper_full__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-id-swiper/lib/ReactIdSwiper.full */ "./node_modules/react-id-swiper/lib/ReactIdSwiper.full.js");
/* harmony import */ var react_id_swiper_lib_ReactIdSwiper_full__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper_lib_ReactIdSwiper_full__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PortfolioItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/PortfolioItem */ "./components/PortfolioItem.js");
/* harmony import */ var _portfolio_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio.json */ "./pages/screens/portfolio/portfolio.json");
var _portfolio_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./portfolio.json */ "./pages/screens/portfolio/portfolio.json", 1);
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../style/theme */ "./style/theme.js");
var _jsxFileName = "/Users/fabrikamedya/Work/portfolio/pages/screens/portfolio/index.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var imageSwiperParams = {
  containerClass: 'image-swiper',
  init: false,
  loop: true,
  loopAdditionalSlides: 3,
  speed: 700,
  slidesPerView: 1.6,
  centeredSlides: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  grabCursor: true,
  parallax: true,
  breakpoints: {
    1023: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
};
var infoSwiperParams = {
  containerClass: 'info-swiper',
  init: false,
  loop: true,
  loopAdditionalSlides: 3,
  speed: 700,
  effect: 'fade',
  navigation: {
    prevEl: '.prev',
    nextEl: '.next'
  }
};

var Portfolio = function Portfolio(_ref) {
  var active = _ref.active;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      imageSwiper = _useState2[0],
      updateImageSwiper = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      infoSwiper = _useState4[0],
      updateInfoSwiper = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (imageSwiper) imageSwiper.init();
    if (infoSwiper) infoSwiper.init();

    if (imageSwiper && infoSwiper) {
      imageSwiper.controller.control = infoSwiper;
      infoSwiper.controller.control = imageSwiper;
    }
  }, [imageSwiper, infoSwiper]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outer, {
    active: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "screen",
    flexDirection: "column",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_id_swiper_lib_ReactIdSwiper_full__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    getSwiper: updateImageSwiper
  }, imageSwiperParams, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), _portfolio_json__WEBPACK_IMPORTED_MODULE_5__.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide",
      key: item.images.desktop + item.images.mobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortfolioItem__WEBPACK_IMPORTED_MODULE_4__["default"].Image, {
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_id_swiper_lib_ReactIdSwiper_full__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    getSwiper: updateInfoSwiper
  }, infoSwiperParams, {
    renderPrevButton: function renderPrevButton() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        className: "prev",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bx bx-left-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        ml: "5px",
        mt: "2px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "PREVIOUS"));
    },
    renderNextButton: function renderNextButton() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        className: "next",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        mr: "5px",
        mt: "2px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "NEXT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bx bx-right-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), _portfolio_json__WEBPACK_IMPORTED_MODULE_5__.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide",
      key: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortfolioItem__WEBPACK_IMPORTED_MODULE_4__["default"].Info, {
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }));
  }))));
};

var Outer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"]).attrs({
  as: 'section'
}).withConfig({
  displayName: "portfolio__Outer",
  componentId: "sc-1iou7aq-0"
})(["", ";opacity:", ";pointer-events:", ";transition:", ";color:white;.screen{", ";padding:40px 0;.image-swiper,.info-swiper{overflow:hidden;}.image-swiper{margin-top:40px;}.info-swiper{padding-bottom:50px;position:relative;.prev,.next{position:absolute;bottom:20px;font-size:14px;line-height:1;letter-spacing:2px;font-weight:300;cursor:pointer;.bx{font-size:12px;}}.prev{left:18.75%;}.next{right:18.75%;}}}"], Object(_style_theme__WEBPACK_IMPORTED_MODULE_6__["cover"])(), function (props) {
  return props.active ? '1' : '0';
}, function (props) {
  return props.active ? 'visible' : 'none';
}, function (props) {
  return props.active ? '1s 0.4s' : '0.1s';
}, _style_theme__WEBPACK_IMPORTED_MODULE_6__["container"]);
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/screens/portfolio")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5283e0480831fbfab9a9.hot-update.js.map