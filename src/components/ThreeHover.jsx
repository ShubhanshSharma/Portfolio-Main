import * as THREE from 'three';
import { cameraPosition } from 'three/examples/jsm/nodes/Nodes.js';


export default function ThreeHover(){

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        80,
        imageElement.offsetWidth /imageElement.offsetHeight,
        0.01,
        10
    );

    camera.position.z = 1;

    const planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2,2),
        new THREE.ShaderMaterial({
            uniforms: shaderUniforms,
            vertexShader,
            fragmentShader
        })
    );
    scene.add(planeMesh);

    const renderer = new THREE.WebGLRenderer();
    init(new THREE.TextureLoader().load(imageElement.src));

}