import styled from 'styled-components';
import * as THREE from 'three';
// import OrbitControls from 'three-orbitcontrols';

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const colors = {
  cube: new THREE.Color(0xf6c523),
  sphere: new THREE.Color(0x1b00ff),
  prism: new THREE.Color(0xc82121),
  sky: new THREE.Color(0x000000),
  ambient: new THREE.Color(0xffffff),
  spotlight: new THREE.Color(0xffffff),
  directional: {
    left: new THREE.Color(0xff0000),
    right: new THREE.Color(0x0000ff),
  },
  background: new THREE.Color(0xf5f7fa),
};

class Animation extends React.Component {
  state = {
    activeScreen: this.props.activeScreen,
  };

  componentDidMount() {
    this.startAnimation();
  }

  componentWillReceiveProps({ activeScreen }) {
    if (this.props.activeScreen !== activeScreen) {
      this.setState({ activeScreen });
    }
  }

  startAnimation = () => {
    // Initializing Three.js Scene
    const scene = new THREE.Scene();

    // Setting Camera
    const dislayRatio = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, dislayRatio, 0.1, 50);
    camera.position.y = 6;
    camera.position.z = 24;

    // Setting Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // renderer.gammaInput = true;
    // renderer.gammaOutput = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Set background color
    renderer.setClearColor(colors.background, 1);

    // Adding ,renderer to Canvas
    this.canvas.appendChild(renderer.domElement);

    // Ambient Light
    const ambient = new THREE.AmbientLight(colors.ambient, 1);
    scene.add(ambient);

    // Directional Light - Left
    // const directLightLeft = new THREE.DirectionalLight(colors.directional.left, 0.5);
    // directLightLeft.position.set(-20, 40, 0);
    // scene.add(directLightLeft);

    // Directional Light - Right
    // const directLightRight = new THREE.DirectionalLight(colors.directional.right, 0.5);
    // directLightRight.position.set(20, 40, 0);
    // scene.add(directLightRight);

    // Spotlight
    const spotlight = new THREE.SpotLight(colors.spotlight, 1);
    spotlight.position.set(0, 35, 0);
    spotlight.castShadow = true;
    scene.add(spotlight);

    // Earth
    // const earthGeometry = new THREE.PlaneGeometry(2000, 2000);
    // const earthMaterial = new THREE.ShadowMaterial();
    // earthMaterial.opacity = 0.025;
    // const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    // earth.position.set(0, 0, 0);
    // earth.rotation.x = -Math.PI * 0.5;
    // earth.receiveShadow = true;
    // scene.add(earth);

    // Sky
    // const sky = earth.clone();
    // sky.position.set(0, 50, 0);
    // sky.material = new THREE.MeshBasicMaterial({
    //   color: colors.sky,
    //   side: THREE.DoubleSide,
    // });
    // scene.add(sky);

    // Cube
    const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
    const cubeMaterial = new THREE.MeshLambertMaterial({
      color: colors.cube,
    });

    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = 0;
    cube.position.y = 6.5;
    cube.rotation.y = Math.PI / 4;
    cube.castShadow = true;
    scene.add(cube);

    // Sphere
    // const sphereGeometry = new THREE.SphereBufferGeometry(3, 24, 24);
    // const sphereMaterial = new THREE.MeshPhongMaterial({
    //   color: colors.sphere,
    // });
    //
    // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // sphere.position.y = 6.5;
    // sphere.castShadow = true;
    // scene.add(sphere);

    // Prism
    // const prismGeometry = new THREE.ConeBufferGeometry(4, 5, 6);
    // const prismMaterial = new THREE.MeshPhongMaterial({
    //   color: colors.prism,
    // });
    //
    // const prism = new THREE.Mesh(prismGeometry, prismMaterial);
    // prism.position.x = 10;
    // prism.position.y = 6.5;
    // prism.castShadow = true;
    // scene.add(prism);

    // Orbit Controls
    // const controls = new OrbitControls(camera, this.canvas);

    const renderCanvas = async () => {
      // const { activeScreen } = this.state;
      requestAnimationFrame(renderCanvas);

      cube.rotation.y += 0.01;
      // sphere.rotation.y += 0.01;
      // prism.rotation.y += 0.01;

      // switch (activeScreen) {
      //   case 'about':
      //     if (cube.position.z < 21) {
      //       cube.position.x += 0.36;
      //       cube.position.z += 0.75;
      //       cube.rotation.x -= 0.15;
      //       cube.rotation.z += 0.1;
      //     } else {
      //       cube.rotation.x = 0;
      //       cube.rotation.y = 0;
      //       cube.rotation.z = 0;
      //     }
      //     break;
      //   case 'portfolio':
      //     if (sphere.position.z < 21) {
      //       sphere.position.y -= 0.05;
      //       sphere.position.z += 0.75;
      //       sphere.rotation.x -= 0.15;
      //       sphere.rotation.z += 0.1;
      //     } else {
      //       sphere.rotation.x = 0;
      //       sphere.rotation.y = 0;
      //       sphere.rotation.z = 0;
      //     }
      //     break;
      //   case 'contact':
      //     if (prism.position.z < 21) {
      //       prism.position.x -= 0.35;
      //       prism.position.y -= 0.04;
      //       prism.position.z += 0.75;
      //       prism.rotation.x -= 0.05;
      //     } else {
      //       prism.rotation.x += 0;
      //       prism.rotation.y = 0;
      //     }
      //     break;
      //   case 'cv':
      //     if (camera.rotation.x < Math.PI / 2) {
      //       camera.rotation.x += 0.05;
      //     }
      //     break;
      //   default:
      //     if (cube.position.z > 0) {
      //       cube.position.x -= 0.48;
      //       cube.position.z -= 1;
      //     }
      //     if (sphere.position.z > 0) {
      //       sphere.position.y += 0.06666666;
      //       sphere.position.z -= 1;
      //     }
      //     if (prism.position.z > 0) {
      //       prism.position.x += 0.46666666;
      //       prism.position.y += 0.05333333;
      //       prism.position.z -= 1;
      //       prism.rotation.x += 0.06666666;
      //     }
      //     if (camera.rotation.x > 0) {
      //       camera.rotation.x -= 0.1;
      //     }
      //     break;
      // }

      renderer.render(scene, camera);
    };

    renderCanvas();

    // Event Listener for Resize
    window.addEventListener(
      'resize',
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false,
    );
  };

  render() {
    return (
      <Outer
        ref={(n) => {
          this.canvas = n;
        }}
      />
    );
  }
}

export default Animation;
