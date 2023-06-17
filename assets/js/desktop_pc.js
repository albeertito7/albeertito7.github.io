import * as THREE from 'three';

//import Stats from 'three/addons/libs/stats.module.js';

import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const container = document.getElementById('container');

//const stats = new Stats();
//container.appendChild(stats.dom);

// Setup
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);

const scene = new THREE.Scene();
//scene.background = new THREE.Color("black")
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 2, 2000);
camera.position.set(20, 12, 10);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.enableZoom = false;
controls.enablePan = false;
controls.enableDamping = true;
controls.update();

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('assets/plugins/threejs/jsm/libs/draco/gltf/');

// Load the glTF file
const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);
loader.load('assets/3d/desktop_pc/scene.gltf', function (gltf) {
  const model = gltf.scene;
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(10, 15, 10);

  scene.add(model);
  scene.add(ambientLight, directionalLight);

  animate();
},
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error('Error loading glTF file', error);
  }
);

window.onresize = function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  //stats.update();
  renderer.render(scene, camera);
}