let loader = new THREE.glTFLoader();
loader.load('assets/car1.gltf', funtion(gltf){
  car1 = gltf.scene.childen[0];
  car1.scale.set(0.5, 0.5, 0.5);
  scene.add(gltf.scene);
  renderer.adde(car1);
});
