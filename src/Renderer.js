import THREE from 'three';

class Renderer {
	constructor({rootEl}) {
		// set the scene size
		var WIDTH = 640,
			HEIGHT = 480;

		// set some camera attributes
		var VIEW_ANGLE = 45,
			ASPECT = WIDTH / HEIGHT,
			NEAR = 0.1,
			FAR = 10000;

		// get the DOM element to attach to
		// - assume we've got jQuery to hand
		var container = document.querySelectorAll('#container')[0];

		// create a WebGL renderer, camera
		// and a scene
		var renderer = new THREE.WebGLRenderer();
		var camera =
			new THREE.PerspectiveCamera(
				VIEW_ANGLE,
				ASPECT,
				NEAR,
				FAR);

		var scene = new THREE.Scene();

		// add the camera to the scene
		scene.add(camera);

		// the camera starts at 0,0,0
		// so pull it back
		camera.position.z = 30;

		// start the renderer
		renderer.setSize(WIDTH, HEIGHT);

		// attach the render-supplied DOM element
		container.appendChild(renderer.domElement);
	}
}

export default Renderer;