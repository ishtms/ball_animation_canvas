let canvas = document.getElementById("canvas");
let context  = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})



function Square(_x,_y,_color){
    this.x = _x;
    this.y = _y;
    this.color = _color;

    this.draw = function(){
        context.fillStyle = this.color;
        context.fillRect(_x,_y, 30, 30); //Hardcoding values for height and width for demo purpose;
    }
}
let img = new Image();
img.src = 'back.png';

var _sqOne = new Square(300, 300, 'red');

let _x = 0;
img.height = canvas.height;
function animate() {
    requestAnimationFrame(animate);
    context.save();
    if(_x <= -1279){
        _x = 0;
    }
    console.log(_x)
    context.drawImage(img, _x, 0);
    _sqOne.draw()
    _x--;
    context.restore();
}
animate();