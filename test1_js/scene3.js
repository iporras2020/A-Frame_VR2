// Component for injecting some A-Frame entities in a scene

/* global AFRAME */
if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('basic-scene', {

    init: function() {
        // Box
        // <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        let box = document.createElement('a-box');
        box.setAttribute('color', 'red');
        box.setAttribute('position', {x: -1, y: 0.5, z: -3});
        box.setAttribute('rotation', {x: 0, y: 45, z: 0});
        box.setAttribute('color', "#4CC3D9");
        this.el.appendChild(box);
 
        let self = this;
        box.addEventListener('click', function() {
            let box2 = document.createElement('a-box');
            box2.setAttribute('color', 'red');

            max = 100; 
            min = -10; 
            x_r = Math.random() * (max - min) + min; 
            y_r = Math.random() * (10 - min) + min; 
            z_r = Math.random() * (max - min) + min; 
            box2.setAttribute('position', {x: x_r, y: y_r, z: z_r}); 

            box2.setAttribute('rotation', {x: 0, y: 45, z: 0});
            box2.setAttribute('color', "#4CC3D9");
            box2.setAttribute('globe', null);
            self.el.appendChild(box2);
            box2.addEventListener('click', function() {
                box2.setAttribute('scale', {x: 0, y: 0, z: 0});
                box2.setAttribute('sound', 'src', 'url(sound1.mp3)');
                box2.setAttribute('sound', 'autoplay', 'true');
                


                


            });
        
            
    });

        // Sphere
        // <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        let sphere = document.createElement('a-sphere');
        sphere.setAttribute('position', {x:0, y: 1.25, z: -5});
        sphere.setAttribute('radius', 1.25);
        sphere.setAttribute('color', "#EF2D5E");
        this.el.appendChild(sphere);
        sphere.addEventListener('click', function() {
            color = sphere.getAttribute('color');
            if (color == '#EF2D5E') {
                sphere.setAttribute('color', 'red');
            } else {
                sphere.setAttribute('color', '#EF2D5E');
            };
    });
        // Cylinder
        // <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        let cylinder = document.createElement('a-cylinder');
        cylinder.setAttribute('position', {x:1, y: 0.75, z: -3});
        cylinder.setAttribute('radius', 0.5);
        cylinder.setAttribute('color', "#FFC65D");
        this.el.appendChild(cylinder);
        cylinder.addEventListener('click', function() {
            scale = sphere.getAttribute('scale');
            cylinder.setAttribute('scale', {x: scale.x+2, y: scale.y+2, z: scale.z+2});
});


        // Plane
        // <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        let plane = document.createElement('a-plane');
        plane.setAttribute('position', {x:0, y: 0, z: -4});
        plane.setAttribute('width', 4);
        plane.setAttribute('height', 4);
        plane.setAttribute('rotation', {x: -90, y: 0, z: 0});
        plane.setAttribute('color', "#7BC8A4");
        this.el.appendChild(plane);

    }
});