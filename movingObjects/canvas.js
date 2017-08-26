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
    this.update = function(_xOrY,_isPositive){
        if(true){
            //if it is x
            if(_isPositive){
                
            }
        }
    }
}
let img = new Image();
img.src = 'back.png';

var _sqOne = new Square(300, 300, 'red');

window.addEventListener('keydown', function(event){
    var char = event.which;
    if(char == 40){
        //Key Down
        console.log("keydown")
        ++_sqOne.y;
    }else if(char == 38){
        //Key Up
        console.log("key up")
        --_sqOne.y;
    }else if(char == 37){
        //Key Left
        console.log("key left")
        --_sqOne.x;
    }else if(char == 39){
        //Key Right
        console.log("right")
        ++_sqOne.x;
    }
    
})

let _x = 0;
img.height = canvas.height;
function animate() {
    requestAnimationFrame(animate);
    context.save();
    if(_x <= -1279){
        _x = 0;
    }
    context.drawImage(img, _x, 0);
    _sqOne.draw()
    _x--;
    context.restore();
}
animate();