// Component for injecting some A-Frame entities in a scene

/* global AFRAME */
if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('sound', {

    init: function() {
        this.el.setAttribute('sound', position="0 0 0", sound="src: url(sound1.mp3); autoplay: true");
    }
});