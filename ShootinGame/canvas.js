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
    this.update = function(_x, _y, _health){
        if(_health <= 0){
            this.height = 0;
            this.width = 0;
        }
        this.health = _health;
        this.x = _x;
        this.y = _y;
        this.draw();
    }
}

let Enemy = new Enemies(100,40,40,30,30);
Enemy.draw()

