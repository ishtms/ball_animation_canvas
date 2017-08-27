let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

function Enemies(_health, _height, _width, _x, _y){
    this.health = _health;
    this.height = _height;
    this.width = _width;
    this.x = _x;
    this.y = _y;

    this.draw = function(){
        context.rect(this.x, this.y, this.width, this.height);
    }
    this.update = function(){
        
    }
}
