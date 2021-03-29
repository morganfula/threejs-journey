// SCENE
const scene = new THREE.Scene();

// RED CUBE
// https://threejs.org/docs/index.html?q=mesh#api/en/objects/Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// adding mesh to the scene
scene.add(mesh);

// SIZES

const sizes = {
  width: 800,
  height: 600,
};

// CAMERA
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // Field Of View - FOV
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// RENDERER
// https://threejs.org/docs/index.html?q=rend#api/en/constants/Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
