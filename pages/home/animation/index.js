import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Outer from './style';
// import OrbitControls from 'three-orbitcontrols';

const colors = {
  cube: new THREE.Color(0xf6c523),
  sphere: new THREE.Color(0x10027a),
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

const Animation = ({ activeScreen }) => {
  const isMobile = useRef(null);
  const active = useRef(activeScreen);
  const canvas = useRef(null);

  const startAnimation = () => {
    // Initializing Three.js Scene
    const scene = new THREE.Scene();

    // Setting Camera
    const dislayRatio = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, dislayRatio, 0.1, 50);
    camera.position.y = 6;
    camera.position.z = 24;

    // Setting Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set background color
    renderer.setClearColor(colors.background, 1);

    // Adding ,renderer to Canvas
    canvas.current.appendChild(renderer.domElement);

    // Ambient Light
    const ambient = new THREE.AmbientLight(colors.ambient, 0.75);
    scene.add(ambient);

    // Directional Light - Left
    const directLightLeft = new THREE.DirectionalLight(colors.directional.left, 1);
    directLightLeft.position.set(-20, 40, 0);
    scene.add(directLightLeft);

    // Directional Light - Right
    const directLightRight = new THREE.DirectionalLight(colors.directional.right, 1);
    directLightRight.position.set(20, 40, 0);
    scene.add(directLightRight);

    // Spotlight
    const spotlight = new THREE.SpotLight(colors.spotlight, 0.5);
    spotlight.position.set(0, 50, 0);
    spotlight.castShadow = true;
    scene.add(spotlight);

    // Earth
    const earthGeometry = new THREE.PlaneGeometry(1000, 1000);
    const earthMaterial = new THREE.ShadowMaterial();
    earthMaterial.opacity = 0.05;
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(0, 0, 0);
    earth.rotation.x = -Math.PI * 0.5;
    earth.receiveShadow = true;
    scene.add(earth);

    // Sky
    const sky = earth.clone();
    sky.position.set(0, 50, 0);
    sky.material = new THREE.MeshBasicMaterial({
      color: colors.sky,
      side: THREE.DoubleSide,
    });
    scene.add(sky);

    // Distance to Center
    const distanceToCenter = isMobile.current ? 7 : 10;

    // Cube
    const cubeGeometry = isMobile.current
      ? new THREE.BoxGeometry(4, 4, 4)
      : new THREE.BoxGeometry(5, 5, 5);
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: colors.cube,
    });

    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -distanceToCenter;
    cube.position.y = 6.5;
    cube.rotation.y = Math.PI / 4;
    cube.castShadow = true;
    scene.add(cube);

    // Sphere
    const sphereGeometry = isMobile.current
      ? new THREE.SphereBufferGeometry(2.25, 24, 24)
      : new THREE.SphereBufferGeometry(3, 24, 24);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: colors.sphere,
    });

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.y = 6.5;
    sphere.castShadow = true;
    scene.add(sphere);

    // Prism
    const prismGeometry = isMobile.current
      ? new THREE.ConeBufferGeometry(3, 4, 5)
      : new THREE.ConeBufferGeometry(4, 5, 6);
    const prismMaterial = new THREE.MeshPhongMaterial({
      color: colors.prism,
    });

    const prism = new THREE.Mesh(prismGeometry, prismMaterial);
    prism.position.x = distanceToCenter;
    prism.position.y = 6.5;
    prism.castShadow = true;
    scene.add(prism);

    // Orbit Controls
    // const controls = new OrbitControls(camera, this.canvas);

    const renderCanvas = () => {
      requestAnimationFrame(renderCanvas);

      const standByRotation = 0.01;

      [cube, sphere, prism].forEach(mesh => {
        mesh.rotation.y += standByRotation;
      });

      const setParams = (desktop, mobile) => {
        if (isMobile.current) return mobile;
        return desktop;
      };

      // Animation Parameters
      const limit = camera.position.z - 3;
      const zVelocity = 0.75;
      const xVelocity = (zVelocity * distanceToCenter) / limit;
      const reverseMultiplier = 4 / 3;

      switch (active.current) {
        case 'about':
          if (cube.position.z < limit) {
            cube.position.z += zVelocity;
            cube.position.x += xVelocity;
            cube.rotation.x += 0.05;
            cube.rotation.z += 0.05;
          } else {
            ['x', 'y', 'z'].forEach(axis => {
              cube.rotation[axis] = 0;
            });
          }
          break;
        case 'portfolio':
          if (sphere.position.z < limit) {
            sphere.position.z += zVelocity;
            sphere.position.y -= setParams(0.05, 0.03);
          }
          break;
        case 'contact':
          if (prism.position.z < limit) {
            prism.position.z += zVelocity;
            prism.position.x -= xVelocity;
            prism.position.y -= 0.04;
            prism.rotation.x -= 0.05;
          } else {
            prism.rotation.y = 0;
          }
          break;
        case 'cv':
          if (camera.rotation.x < Math.PI / 2) {
            camera.rotation.x += 0.04;
          }
          break;

        // Reverse Animation
        default:
          if (cube.position.z > 0) {
            cube.position.z -= reverseMultiplier * zVelocity;
            cube.position.x -= reverseMultiplier * xVelocity;
          }
          if (sphere.position.z > 0) {
            sphere.position.z -= reverseMultiplier * zVelocity;
            sphere.position.y += reverseMultiplier * setParams(0.05, 0.03);
          }
          if (prism.position.z > 0) {
            prism.position.z -= reverseMultiplier * zVelocity;
            prism.position.x += reverseMultiplier * xVelocity;
            prism.position.y += reverseMultiplier * 0.04;
            prism.rotation.x += reverseMultiplier * 0.05;
          }
          if (camera.rotation.x > 0) {
            camera.rotation.x -= 0.08;
          }
          break;
      }
      renderer.render(scene, camera);
    };

    renderCanvas();

    const handleAnimationOnResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Event Listener for Resize
    window.addEventListener('resize', handleAnimationOnResize);
  };

  const setIsMobile = () => {
    isMobile.current = !(window.innerWidth > 768);
  };

  useEffect(() => {
    setIsMobile();
    startAnimation();
  }, []);

  useEffect(() => {
    active.current = activeScreen;
  }, [activeScreen]);

  return <Outer ref={canvas} />;
};

export default Animation;
