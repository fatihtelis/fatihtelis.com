webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BackgroundAnimation.js":
/*!*******************************************!*\
  !*** ./components/BackgroundAnimation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
var _jsxFileName = "/Users/fabrikamedya/Work/portfolio/components/BackgroundAnimation.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Outer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BackgroundAnimation__Outer",
  componentId: "sc-139m4ld-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;z-index:10;"]);
var colors = {
  cube: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x6c5ce7),
  sphere: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x0c084c),
  prism: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xff0b55),
  earth: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xc2b7cc),
  sky: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x23b3f0),
  ambient: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xffffff),
  spotlight: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xffffff),
  directional: {
    left: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xff0000),
    right: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x0000ff)
  },
  background: new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xf5f7fa)
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
      activeScreen: _this.props.activeScreen
    });

    _defineProperty(_assertThisInitialized(_this), "startAnimation", function () {
      // Initializing Three.js Scene
      var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"](); // Setting Camera

      var dislayRatio = window.innerWidth / window.innerHeight;
      var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](75, dislayRatio, 0.1, 50);
      camera.position.y = 6;
      camera.position.z = 24; // Setting Renderer

      var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
        antialias: true
      });
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_2__["PCFSoftShadowMap"];
      renderer.gammaInput = true;
      renderer.gammaOutput = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight); // Set background color

      renderer.setClearColor(colors.background, 1); // Adding ,renderer to Canvas

      _this.canvas.appendChild(renderer.domElement); // Ambient Light


      var ambient = new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](colors.ambient, 0.75);
      scene.add(ambient); // Directional Light - Left

      var directLightLeft = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](colors.directional.left, 0.15);
      directLightLeft.position.set(-20, 40, 0);
      scene.add(directLightLeft); // Directional Light - Right

      var directLightRight = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](colors.directional.right, 0.3);
      directLightRight.position.set(20, 40, 0);
      scene.add(directLightRight); // Spotlight

      var spotlight = new three__WEBPACK_IMPORTED_MODULE_2__["SpotLight"](colors.spotlight, 0.5);
      spotlight.position.set(0, 50, 0);
      spotlight.castShadow = true;
      scene.add(spotlight); // Earth

      var earthGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](2000, 2000);
      var earthMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
        color: colors.earth
      });
      var earth = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](earthGeometry, earthMaterial);
      earth.position.set(0, 0, 0);
      earth.rotation.x = -Math.PI * 0.5;
      earth.receiveShadow = true;
      scene.add(earth); // Sky

      var sky = earth.clone();
      sky.position.set(0, 50, 0);
      sky.material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: colors.sky,
        side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"]
      });
      scene.add(sky); // Cube

      var cubeGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](5, 5, 5);
      var cubeMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({
        color: colors.cube
      });
      var cube = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](cubeGeometry, cubeMaterial);
      cube.position.x = -10;
      cube.position.y = 6.5;
      cube.rotation.y = Math.PI / 4;
      cube.castShadow = true;
      scene.add(cube); // Sphere

      var sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["SphereBufferGeometry"](3, 24, 24);
      var sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({
        color: colors.sphere
      });
      var sphere = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](sphereGeometry, sphereMaterial);
      sphere.position.y = 6.5;
      sphere.castShadow = true;
      scene.add(sphere); // Prism

      var prismGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["ConeBufferGeometry"](4, 5, 6);
      var prismMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({
        color: colors.prism
      });
      var prism = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](prismGeometry, prismMaterial);
      prism.position.x = 10;
      prism.position.y = 6.5;
      prism.castShadow = true;
      scene.add(prism); // Orbit Controls
      // const controls = new OrbitControls(camera, this.canvas);

      var renderCanvas = function renderCanvas() {
        var activeScreen = _this.state.activeScreen;
        requestAnimationFrame(renderCanvas);
        cube.rotation.y += 0.01;
        sphere.rotation.y += 0.01;
        prism.rotation.y += 0.01;

        switch (activeScreen) {
          case 'about':
            if (cube.position.z < 21) {
              cube.position.x += 0.36;
              cube.position.z += 0.75;
              cube.rotation.x -= 0.15;
              cube.rotation.z += 0.1;
            } else {
              cube.rotation.x = 0;
              cube.rotation.y = 0;
              cube.rotation.z = 0;
            }

            break;

          case 'portfolio':
            if (sphere.position.z < 21) {
              sphere.position.y -= 0.05;
              sphere.position.z += 0.75;
              sphere.rotation.x -= 0.15;
              sphere.rotation.z += 0.1;
            } else {
              sphere.rotation.x = 0;
              sphere.rotation.y = 0;
              sphere.rotation.z = 0;
            }

            break;

          case 'contact':
            if (prism.position.z < 21) {
              prism.position.x -= 0.35;
              prism.position.y -= 0.04;
              prism.position.z += 0.75;
              prism.rotation.x -= 0.05;
            } else {
              prism.rotation.x += 0;
              prism.rotation.y = 0;
            }

            break;

          case 'cv':
            if (camera.rotation.x < Math.PI / 2) {
              camera.rotation.x += 0.05;
            }

            break;

          default:
            if (cube.position.z > 0) {
              cube.position.x -= 0.48;
              cube.position.z -= 1;
            }

            if (sphere.position.z > 0) {
              sphere.position.y += 0.06666666;
              sphere.position.z -= 1;
            }

            if (prism.position.z > 0) {
              prism.position.x += 0.46666666;
              prism.position.y += 0.05333333;
              prism.position.z -= 1;
              prism.rotation.x += 0.06666666;
            }

            if (camera.rotation.x > 0) {
              camera.rotation.x -= 0.1;
            }

            break;
        }

        renderer.render(scene, camera);
      };

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
    value: function componentWillReceiveProps(_ref) {
      var activeScreen = _ref.activeScreen;

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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outer, {
        ref: function ref(n) {
          _this2.canvas = n;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      });
    }
  }]);

  return BackgroundAnimation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ }),

/***/ "./node_modules/three-orbitcontrols/OrbitControls.js":
false

})
//# sourceMappingURL=index.js.febc22693ffa1a762161.hot-update.js.map