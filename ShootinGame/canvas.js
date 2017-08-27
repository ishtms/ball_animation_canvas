let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

let windowInfo = {
    x: 0, y: 0
}
window.addEventListener('mousemove', function(event){
        checkAndDeleteSquare(event.clientX, event.clientY);
        windowInfo.x = event.clientX;
        windowInfo.y = event.clientY;
    })

function drawRect(_x, _y){
    context.save()
    context.fillRect(_x, _y, 200, 200)
    context.restore();
}

function Enemies(_health, _height, _width, _x, _y){
    this.health = _health;
    this.height = _height;
    this.width = _width;
    this.x = _x;
    this.y = _y;

    this.draw = function(){
        context.fillStyle = 'cyan'        
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    this.update = function(_x, _y){
        if(_health <= 0){
            this.height = 0;
            this.width = 0;
        }
        this.x = _x;
        this.y = _y;
        this.draw();
    }
}

var arr = [];
var y_pos = -60;


function init(){

    for(var index = 0; index < 10000; index++){
        arr.push(new Enemies(100,40, 40, Math.random() * canvas.width, y_pos));
        y_pos -=60;
    }
}
init();
let score = 0;

function checkAndDeleteSquare(_x, _y){
    for(var index = 0; index < arr.length; index++){
        if(_x >= arr[index].x && _x <= (arr[index].width + arr[index].x) &&
            _y >= arr[index].y && _y <= (arr[index].width + arr[index].y)){
                alert('Game over buddy, your score is '+ score);
                context.clearRect(0,0, canvas.width, canvas.height);
                arr = [];
                y_pos = -60;                
                init();
            }
        if(arr[index].y > canvas.height){
            score += 50;
            arr.splice(index, 1);
        }
    }
}

var BackgroundImage = new Image();
BackgroundImage.src = 'back.png';
BackgroundImage.height = canvas.height;
let _x = 0;

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width, canvas.height);
    if(_x <= -1279){
        _x = 0;
    }
    context.drawImage(BackgroundImage, _x, 0);
    _x--;
    context.beginPath();
    context.fillStyle = 'rgba(255,0,0,1)';
    context.arc(windowInfo.x, windowInfo.y, 5, 0, Math.PI * 2);
    context.fill();
    context.closePath();
    // context.font = "20px sans-serif";
    // context.fillText("Score - "+ score,canvas.width - 100,50);
    var boxX, boxY;
    for(let index = 0; index < arr.length; index ++){
        boxX = arr[index].x;
        boxY = arr[index].y;
        arr[index].update(boxX, boxY);
        arr[index].y += 7;
    }
}

animate();