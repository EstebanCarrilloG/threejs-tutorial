import * as THREE from "three";

// 1. Create the scene
const scene = new THREE.Scene(); // Create a new scene
scene.background = new THREE.Color("#F0F0F0"); // Set the background color

//2. Add the camera
const camera = new THREE.PerspectiveCamera( 
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); // Create a new camera with a field of view of 75 degrees, an aspect ratio of the window width divided by the window height, a near clipping plane of 0.1 and a far clipping plane of 1000
camera.position.z = 10; // Set the position of the camera in the z axis

//3. Create and add a cube object
const geometry = new THREE.BoxGeometry(); // Create a new box geometry
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "#468585",
}); // Create a new mesh lambert material

const cube = new THREE.Mesh(geometry, material); // Create a new mesh with the geometry and material
scene.add(cube); // Add the mesh to the scene

//4. Add lighting
const light = new THREE.DirectionalLight(0x9cdba6, 10); // Create a new directional light
light.position.set(1, 1, 1); // Set the position of the light
scene.add(light); // Add the light to the scene

//5.- Set up renderer
const renderer = new THREE.WebGLRenderer(); // Create a new WebGL renderer
renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer
document.body.appendChild(renderer.domElement); // Add the renderer to the DOM

//6. Animate the scene

/**
 * Animation function
 * @description
 * This function is the main animation loop that is called recursively
 * using the requestAnimationFrame method. It is responsible for updating
 * the rotation and position of the cube and rendering the scene.
 */
function animate() {
  requestAnimationFrame(animate); // Call the animate function recursively
  cube.rotation.x += 0.01; // Rotate the cube in the x axis 
  cube.position.z += 0.005; // Move the cube in the z axis
  cube.rotation.y += 0.01; // Rotate the cube in the y axis
  renderer.render(scene, camera); // Render the scene
}

animate(); // Start the animation
