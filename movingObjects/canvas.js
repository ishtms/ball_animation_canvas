let canvas = document.getElementById("canvas");
let context  = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let img = new Image();
img.src = 'back.png';
img.height = canvas.height

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
        context.fillRect(this.x,this.y, 90, 90); //Hardcoding values for height and width for demo purpose;
    }
    this.update = function(_xOrY,_isPositive){
        
        if(this.x < 0){
            this. x = 0; 
            return
        }else if(this.y < 0){
            this.y = 0;
            return;
        }else if(this.x + 30 >= canvas.width){
            this.x = canvas.width - 30;
        }else if(this.y + 30 >= canvas.height){
            this.y = canvas.height - 30;
        }
        if(_xOrY){
            //if it is x
            if(_isPositive){
                this.x+=3;
            }else{
                this.x-=3;
            }
        }else{
            //it is y
            if(_isPositive){
                this.y+=3;
            }else{
                this.y-=3;
            }
        }
        this.draw();
    }
}

var _sqOne = new Square(300, 300, 'red');

document.addEventListener('keydown', function(event){
    var char = event.which;
    if(char == 40){
        //Key Down
        console.log("keydown")
        _sqOne.update(false,true);
    }else if(char == 38){
        //Key Up
        console.log("key up")
        _sqOne.update(false,false);
    }else if(char == 37){
        //Key Left
        _sqOne.update(true,false);
    }else if(char == 39){
        //Key Right
        console.log("right")
        _sqOne.update(true,true);
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