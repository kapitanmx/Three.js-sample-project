var renderer = new THREE.WebGLRenderer( {antialias: true} );

    renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

    scene.fog = new THREE.Fog( 0x000000, 1, 70);

var camera = new THREE.PerspectiveCamera(100,
   window.innerWidth / window.innerHeight, 1, 10000);


/*window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectMatrix();

})*/

init()

function init() {

    /*var controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.addEventListener('change', render);
      controls.enableZoom = false;*/
  
    var triangle = {
      geometry: new THREE.TorusBufferGeometry(10, 0.4, 2, 3),
      material:  new THREE.MeshBasicMaterial({
        color: 0x00fff0
      })
    }

    var torus2 = {
      geometry: new THREE.TorusBufferGeometry(10, 0.4, 20, 50),
      material:  new THREE.MeshBasicMaterial({
        color: Math.random() * 0xffffff 
      })
    }

    var cube = {
      geometry: new THREE.BoxBufferGeometry(1, 1, 1 ),
      material: new THREE.MeshBasicMaterial({
        color: 0x00ff00, 
      })
    }

    var cone = {
      geometry: new THREE.ConeBufferGeometry( 1, 2, 5 ),
      material: new THREE.MeshBasicMaterial( {color: 0xffff00} )
    }

    /*var geometry= new THREE.TorusBufferGeometry(2, 0.2, 20, 50);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00fff0
    });*/

    var torusgroup = new THREE.Group();

    for ( let i=0; i<200; i++ ) {

      var el1 = new THREE.Mesh(torus2.geometry, torus2.material);

      el1.position.z = i+=3 ;

      el1.updateMatrix();

      torusgroup.add(el1);

    }
    torusgroup.position.z = 0;
    scene.add(torusgroup)

    /*const changeColors = () => {

      var cubeColors = [0xff6633, 0xcf1020, 0x2863fb]

      for ( let i=0; i<cubeColors.length; i++ ) {

        cube.material = cubeColors[i];

      }

    }

    setInterval( () => {

      changeColors()

    }, 1000)*/


    //Initialize cubes
    
    var group = new THREE.Group();

    for ( let i=0; i<1000; i++ ) {

      var el2 = new THREE.Mesh( cube.geometry, cube.material );

          el2.position.x = Math.random() * 100 - 50;

          el2.position.y = Math.random() * 100 - 50;

          el2.position.z = Math.random() * 100;
          
          el2.rotation.x = Math.random() * 2 * Math.PI;

          el2.rotation.y = Math.random() * 2 * Math.PI;

          el2.matrixAutoUpdate = false;

          el2.updateMatrix();

      group.add( el2 );

    }

    group.position.z = 0;
    scene.add( group );

    //Initialize cones

    var conegroup = new THREE.Group();

    for ( let i=0; i<1000; i++){

      var el3 = new THREE.Mesh( cone.geometry, cone.material)

          el3.position.x = Math.random() * 100 - 50;

          el3.position.y = Math.random() * 100 - 50;

          el3.position.z = Math.random() * 100;
          
          el3.rotation.x = Math.random() * 2 * Math.PI;

          el3.rotation.y = Math.random() * 2 * Math.PI;

          el3.matrixAutoUpdate = false;

          el3.updateMatrix();

      conegroup.add( el3 );
    }

    conegroup.position.z = -100
    scene.add( conegroup )


    //Initialize a triangle-shape tunnel

    var trianglegroup = new THREE.Group();

    for ( let i=0; i<100; i++) {
      
      var el4 = new THREE.Mesh( triangle.geometry, triangle.material )

      el4.position.z = i+=2;
      el4.updateMatrix();

      trianglegroup.add(el4)
    }

    trianglegroup.position.z = -100
    trianglegroup.rotation.z = Math.sin(-1)
    scene.add(trianglegroup)

    camera.position.z = 100;

}


var animate = function() {

  requestAnimationFrame( animate );

  camera.translateZ(-0.15);

  /*el1.rotation.x += 0.03;*/

  render()

};

//Render all 

var render = function(){

  renderer.render( scene, camera ); 

}

animate();
