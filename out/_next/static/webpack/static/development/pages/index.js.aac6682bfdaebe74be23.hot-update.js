webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PortfolioItem.js":
/*!*************************************!*\
  !*** ./components/PortfolioItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rebass/grid */ "./node_modules/@rebass/grid/dist/index.js");
/* harmony import */ var _rebass_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_data_libs_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/data/libs.json */ "./static/data/libs.json");
var _static_data_libs_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/data/libs.json */ "./static/data/libs.json", 1);
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/theme */ "./style/theme.js");
var _jsxFileName = "/Users/fabrikamedya/Work/portfolio/components/PortfolioItem.js";






var PortfolioImage = function PortfolioImage(_ref) {
  var images = _ref.data.images;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageBg, {
    image: images,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

var PortfolioInfo = function PortfolioInfo(_ref2) {
  var _ref2$data = _ref2.data,
      title = _ref2$data.title,
      description = _ref2$data.description,
      link = _ref2$data.link,
      technologies = _ref2$data.technologies,
      screenshots = _ref2$data.screenshots;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info, {
    flexDirection: "column",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "content",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "project-header",
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "project-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer nofollow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "GO TO PROJECT WEBSITE", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bx bx-chevrons-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "detail-wrapper",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "detail",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "detail-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "SCREENSHOTS"), screenshots.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: item,
      target: "_blank",
      rel: "noopener noreferrer",
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, index + 1, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bx bx-link-external",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "detail",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "detail-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "FRAMEWORKS/LIBS USED"), technologies.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _static_data_libs_json__WEBPACK_IMPORTED_MODULE_3__[item].website,
      target: "_blank",
      rel: "noopener noreferrer",
      title: item,
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _static_data_libs_json__WEBPACK_IMPORTED_MODULE_3__[item].logo,
      height: "20",
      alt: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }));
  }))));
};

var ImageBg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PortfolioItem__ImageBg",
  componentId: "sc-71m4an-0"
})(["background:", ";width:100%;padding-top:50%;"], function (props) {
  return "url(".concat(props.images.desktop, ") center/cover no-repeat");
});
var Info = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_rebass_grid__WEBPACK_IMPORTED_MODULE_2__["Flex"]).withConfig({
  displayName: "PortfolioItem__Info",
  componentId: "sc-71m4an-1"
})(["width:62.5%;height:300px;margin:0 auto;background-color:white;border-radius:4px;border-top-right-radius:0;border-top-left-radius:0;padding:30px;color:", ";border-top:1px solid #eee;.project-header{width:100%;padding-bottom:5px;.project-title{font-size:20px;font-weight:700;}a,a:visited,a:active{letter-spacing:1px;font-size:12px;color:#39318e;text-decoration:none;}}.description{padding:30px 0;border-top:1px solid #eee;border-bottom:1px solid #eee;}.detail{margin-top:20px;&-title{color:#999;font-size:12px;}a,a:visited,a:active{margin-left:15px;color:#39318e;text-decoration:none;display:flex;align-items:flex-start;.bx{font-size:12px;margin-left:2px;}}}"], _style_theme__WEBPACK_IMPORTED_MODULE_4__["colors"].font);
var PortfolioItem = {};
PortfolioItem.Image = PortfolioImage;
PortfolioItem.Info = PortfolioInfo;
/* harmony default export */ __webpack_exports__["default"] = (PortfolioItem);

/***/ })

})
//# sourceMappingURL=index.js.aac6682bfdaebe74be23.hot-update.js.map