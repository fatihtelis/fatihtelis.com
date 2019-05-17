webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BackgroundAnimation.js":
/*!*******************************************!*\
  !*** ./components/BackgroundAnimation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var _jsxFileName = "C:\\Users\\Fatih Telis\\Desktop\\fatihtelis.com\\fatihtelis.com\\components\\BackgroundAnimation.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import OrbitControls from 'three-orbitcontrols';

var Outer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "BackgroundAnimation__Outer",
  componentId: "lb1r2f-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;z-index:10;"]);
var colors = {
  cube: new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0xf6c523),
  sphere: new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0x1b00ff),
  prism: new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0xc82121),
  sky: new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0x000000),
  ambient: new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0xffffff),
  spotlight: new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0xffffff),
  directional: {
    left: new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0xff0000),
    right: new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0x0000ff)
  },
  background: new three__WEBPACK_IMPORTED_MODULE_3__["Color"](0xf5f7fa)
};

var BackgroundAnimation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BackgroundAnimation, _React$Component);

  function BackgroundAnimation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BackgroundAnimation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BackgroundAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeScreen: _this.props.activeScreen,
      doAnimate: 0
    });

    _defineProperty(_assertThisInitialized(_this), "startAnimation", function () {
      // Initializing Three.js Scene
      var scene = new three__WEBPACK_IMPORTED_MODULE_3__["Scene"](); // Setting Camera

      var dislayRatio = window.innerWidth / window.innerHeight;
      var camera = new three__WEBPACK_IMPORTED_MODULE_3__["PerspectiveCamera"](75, dislayRatio, 0.1, 50);
      camera.position.y = 6;
      camera.position.z = 24; // Setting Renderer

      var renderer = new three__WEBPACK_IMPORTED_MODULE_3__["WebGLRenderer"]({
        antialias: true
      });
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_3__["PCFSoftShadowMap"];
      renderer.gammaInput = true;
      renderer.gammaOutput = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight); // Set background color

      renderer.setClearColor(colors.background, 1); // Adding ,renderer to Canvas

      _this.canvas.appendChild(renderer.domElement); // Ambient Light


      var ambient = new three__WEBPACK_IMPORTED_MODULE_3__["AmbientLight"](colors.ambient, 0.75);
      scene.add(ambient); // Directional Light - Left

      var directLightLeft = new three__WEBPACK_IMPORTED_MODULE_3__["DirectionalLight"](colors.directional.left, 0.5);
      directLightLeft.position.set(-20, 40, 0);
      scene.add(directLightLeft); // Directional Light - Right

      var directLightRight = new three__WEBPACK_IMPORTED_MODULE_3__["DirectionalLight"](colors.directional.right, 0.5);
      directLightRight.position.set(20, 40, 0);
      scene.add(directLightRight); // Spotlight

      var spotlight = new three__WEBPACK_IMPORTED_MODULE_3__["SpotLight"](colors.spotlight, 0.5);
      spotlight.position.set(0, 50, 0);
      spotlight.castShadow = true;
      scene.add(spotlight); // Earth

      var earthGeometry = new three__WEBPACK_IMPORTED_MODULE_3__["PlaneGeometry"](2000, 2000);
      var earthMaterial = new three__WEBPACK_IMPORTED_MODULE_3__["ShadowMaterial"]();
      earthMaterial.opacity = 0.05;
      var earth = new three__WEBPACK_IMPORTED_MODULE_3__["Mesh"](earthGeometry, earthMaterial);
      earth.position.set(0, 0, 0);
      earth.rotation.x = -Math.PI * 0.5;
      earth.receiveShadow = true;
      scene.add(earth); // Sky

      var sky = earth.clone();
      sky.position.set(0, 50, 0);
      sky.material = new three__WEBPACK_IMPORTED_MODULE_3__["MeshBasicMaterial"]({
        color: colors.sky,
        side: three__WEBPACK_IMPORTED_MODULE_3__["DoubleSide"]
      });
      scene.add(sky); // Cube

      var cubeGeometry = new three__WEBPACK_IMPORTED_MODULE_3__["BoxGeometry"](5, 5, 5);
      var cubeMaterial = new three__WEBPACK_IMPORTED_MODULE_3__["MeshPhongMaterial"]({
        color: colors.cube
      });
      var cube = new three__WEBPACK_IMPORTED_MODULE_3__["Mesh"](cubeGeometry, cubeMaterial);
      cube.position.x = -10;
      cube.position.y = 6.5;
      cube.rotation.y = Math.PI / 4;
      cube.castShadow = true;
      scene.add(cube); // Sphere

      var sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_3__["SphereBufferGeometry"](3, 24, 24);
      var sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_3__["MeshPhongMaterial"]({
        color: colors.sphere
      });
      var sphere = new three__WEBPACK_IMPORTED_MODULE_3__["Mesh"](sphereGeometry, sphereMaterial);
      sphere.position.y = 6.5;
      sphere.castShadow = true;
      scene.add(sphere); // Prism

      var prismGeometry = new three__WEBPACK_IMPORTED_MODULE_3__["ConeBufferGeometry"](4, 5, 6);
      var prismMaterial = new three__WEBPACK_IMPORTED_MODULE_3__["MeshPhongMaterial"]({
        color: colors.prism
      });
      var prism = new three__WEBPACK_IMPORTED_MODULE_3__["Mesh"](prismGeometry, prismMaterial);
      prism.position.x = 10;
      prism.position.y = 6.5;
      prism.castShadow = true;
      scene.add(prism); // Orbit Controls
      // const controls = new OrbitControls(camera, this.canvas);

      var renderCanvas =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var catalyzer, _this$state, activeScreen, doAnimate;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  catalyzer = 3;
                  _this$state = _this.state, activeScreen = _this$state.activeScreen, doAnimate = _this$state.doAnimate;
                  requestAnimationFrame(renderCanvas);
                  _context.next = 5;
                  return _this.setState({
                    doAnimate: doAnimate + 1
                  });

                case 5:
                  if (!(doAnimate % catalyzer !== 0)) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return");

                case 7:
                  cube.rotation.y += 0.01 * catalyzer;
                  sphere.rotation.y += 0.01 * catalyzer;
                  prism.rotation.y += 0.01 * catalyzer;
                  _context.t0 = activeScreen;
                  _context.next = _context.t0 === 'about' ? 13 : _context.t0 === 'portfolio' ? 15 : _context.t0 === 'contact' ? 17 : _context.t0 === 'cv' ? 19 : 21;
                  break;

                case 13:
                  if (cube.position.z < 21) {
                    cube.position.x += 0.36 * catalyzer;
                    cube.position.z += 0.75 * catalyzer;
                    cube.rotation.x -= 0.15 * catalyzer;
                    cube.rotation.z += 0.1 * catalyzer;
                  } else {
                    cube.rotation.x = 0;
                    cube.rotation.y = 0;
                    cube.rotation.z = 0;
                  }

                  return _context.abrupt("break", 26);

                case 15:
                  if (sphere.position.z < 21) {
                    sphere.position.y -= 0.05 * catalyzer;
                    sphere.position.z += 0.75 * catalyzer;
                    sphere.rotation.x -= 0.15 * catalyzer;
                    sphere.rotation.z += 0.1 * catalyzer;
                  } else {
                    sphere.rotation.x = 0;
                    sphere.rotation.y = 0;
                    sphere.rotation.z = 0;
                  }

                  return _context.abrupt("break", 26);

                case 17:
                  if (prism.position.z < 21) {
                    prism.position.x -= 0.35 * catalyzer;
                    prism.position.y -= 0.04 * catalyzer;
                    prism.position.z += 0.75 * catalyzer;
                    prism.rotation.x -= 0.05 * catalyzer;
                  } else {
                    prism.rotation.x += 0;
                    prism.rotation.y = 0;
                  }

                  return _context.abrupt("break", 26);

                case 19:
                  if (camera.rotation.x < Math.PI / 2) {
                    camera.rotation.x += 0.05 * catalyzer;
                  }

                  return _context.abrupt("break", 26);

                case 21:
                  if (cube.position.z > 0) {
                    cube.position.x -= 0.48 * catalyzer;
                    cube.position.z -= 1 * catalyzer;
                  }

                  if (sphere.position.z > 0) {
                    sphere.position.y += 0.06666666 * catalyzer;
                    sphere.position.z -= 1 * catalyzer;
                  }

                  if (prism.position.z > 0) {
                    prism.position.x += 0.46666666 * catalyzer;
                    prism.position.y += 0.05333333 * catalyzer;
                    prism.position.z -= 1 * catalyzer;
                    prism.rotation.x += 0.06666666 * catalyzer;
                  }

                  if (camera.rotation.x > 0) {
                    camera.rotation.x -= 0.1 * catalyzer;
                  }

                  return _context.abrupt("break", 26);

                case 26:
                  renderer.render(scene, camera);

                case 27:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function renderCanvas() {
          return _ref.apply(this, arguments);
        };
      }();

      renderCanvas(); // Event Listener for Resize

      window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, false);
    });

    return _this;
  }

  _createClass(BackgroundAnimation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startAnimation();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref2) {
      var activeScreen = _ref2.activeScreen;

      if (this.props.activeScreen !== activeScreen) {
        this.setState({
          activeScreen: activeScreen
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Outer, {
        ref: function ref(n) {
          _this2.canvas = n;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      });
    }
  }]);

  return BackgroundAnimation;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ })

})
//# sourceMappingURL=index.js.8567444cb383eafc06c1.hot-update.js.map