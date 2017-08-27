let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

function Particles(_x, _y, _radius, _speedY){
    this.x = _x;
    this.y = _y;
    this.radius = _radius;
    this.speedY = _speedY;

    this.draw = function(){
        context.fillStyle = 'white';
        context.beginPath();
        context.arc(this.x,this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    this.update = function(){
        this.y += this.speedY;
        this.draw();
    }
}

let particleArray = [];
let _yPos = 0, radius, speedY, _xPos;

for(var index = 0; index < 1000; index++){
    radius = randomRadiusGenerator();
    _xPos = randomXGenerator();
    
    if(radius == 1){
        speedY = 0.7
    }else if(radius == 2){
        speedY = 1.5
    }else if(radius == 3){
        speedY = 2.2
    }
    
    particleArray.push(new Particles(_xPos, _yPos, radius, speedY));
    _yPos-=3;
}
var temp_x;
function randomXGenerator(){
    temp_x = Math.random() * canvas.width;
    return temp_x;
}
var temp_radius;
function randomRadiusGenerator(){
    temp_radius = Math.floor(Math.random() * 6);
    if(temp_radius == 0){
        return 1
    }else if(temp_radius == 1){
        return 2
    }else if(temp_radius == 2){
        return 3
    }else if(temp_radius == 3){
        return 4
    }else if(temp_radius == 4){
        return 5
    }else if(temp_radius == 5){
        return 6
    }
}

var BackgroundImage = new Image();
BackgroundImage.src = 'back.jpg';

//the context.drawImage() function doesn't works outside the animate function or without requestAnimationFrame() funciton
//because you to need to specify BackgroundImage.onLoad = ...any_function... You can do either way.

function animate(){
    context.save()
    requestAnimationFrame(animate)
    context.clearRect(0,0,canvas.width, canvas.height);
    context.drawImage(BackgroundImage, 0, 0, canvas.width, canvas.height)

    //animating particles here
    for(var index = 0; index < particleArray.length; index++){
        particleArray[index].update();
    }
    context.restore()
}
animate();
