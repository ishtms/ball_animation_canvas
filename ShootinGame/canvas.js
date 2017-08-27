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
    console.log(event.clientX, event.clientY)
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

var xAxisArray = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000];

for(var index = 0; index < 20; index++){
    arr.push(new Enemies(100,40, 40, xAxisArray[Math.floor(Math.random() * xAxisArray.length)], y_pos));
    y_pos -=60;
}

function checkAndDeleteSquare(_x, _y){
    for(var index = 0; index < arr.length; index++){
        if(_x >= arr[index].x && _x <= (arr[index].width + arr[index].x) &&
            _y >= arr[index].y && _y <= (arr[index].width + arr[index].y)){
                arr.splice(index, 1);
            }
    }
}

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    context.arc(windowInfo.x, windowInfo.y, 20, 0, Math.PI * 2);
    context.fill();
    var boxX, boxY;
    for(let index = 0; index < arr.length; index ++){
        boxX = arr[index].x;
        boxY = arr[index].y;
        arr[index].update(boxX, boxY);
        arr[index].y += 1;
    }
}

animate();