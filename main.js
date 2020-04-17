let scene, camera, renderer, cube;

/*import GLTFLoader from 'js/GLTFLoader.js';*/

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffddff);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 4;

  //Licht
  hlight = new THREE.AmbientLight (0x404040,100);
  scene.add(hlight);
  directionalLight = new THREE.DirectionalLight(0xffffff,100);
  directionalLight.position.set(0,1,0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  light = new THREE.PointLight(0xc4c4c4,10);
  light.position.set(0,300,500);
  scene.add(light);
  light2 = new THREE.PointLight(0xc4c4c4,10);
  light2.position.set(500,100,0);
  scene.add(light2);
  light3 = new THREE.PointLight(0xc4c4c4,10);
  light3.position.set(0,100,-500);
  scene.add(light3);
  light4 = new THREE.PointLight(0xc4c4c4,10);
  light4.position.set(-500,300,500);
  scene.add(light4);

  //Renderer
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

/*  //World
    const rgbeloader = new THREE.RGBELoader()
    rgbeloader.setDataType( THREE.UnsignedByteType )
    rgbeloader.setPath( 'textures/' )
    rgbeloader.load( 'royal_esplanade_2k.hdr', function ( texture ) {

      var envMap = pmremGenerator.fromEquirectangular( texture ).texture;

      scene.background = envMap;
      scene.environment = envMap;

      texture.dispose();
      pmremGenerator.dispose();

      render();*/

      // model
/*      const loader = new GLTFLoader();
      if( this.state.current.Race === null ) {
        loader.load(
          'assets/scene.gltf',
          ( gltf ) => {
            yourScene.add( gltf.scene );
          },
        )
      } else {
        console.log( 'Not loaded' );
      }*/


  const geometry = new THREE.BoxGeometry( 2, 2, 1 );
  //const material = new THREE.MeshBasicMaterial( {color: 0x00ffff} );
  const texture = new THREE.TextureLoader().load( 'texture/bricks.jpg' );
  const material = new THREE.MeshBasicMaterial( {map: texture} );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

    //Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
  	controls.enableDamping = true;
  	controls.dampingFactor = 0.1;

  	controls.screenSpacePanning = false;

  	controls.minDistance = 3;
  	controls.maxDistance = 10;

  	controls.maxPolarAngle = Math.PI / 2;

}



function animate() {
  requestAnimationFrame(animate);
  controls.update();

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
