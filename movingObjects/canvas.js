let canvas = document.getElementById("canvas");
let context  = canvas.getContext('2d');

canvas.clientHeight = window.innerHeight;
canvas.clientWidth = window.innerWidth;

window.addEventListener('resize', function(){
    canvas.clientHeight = window.innerHeight;
    canvas.clientWidth = window.innerWidth;
})

let img = new Image();
img.src = 'back.png';

let _x = 0;

function animate() {
    requestAnimationFrame(animate);
    context.save();
    if(_x <= 1279){
        _x = 0;
    }
    context.uploadImage(img, _x, 0);
    _x--;
    context.restore();
}
animate();