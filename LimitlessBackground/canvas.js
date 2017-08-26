let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
//image widht = 1279;
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

var BackgroundImage = new Image();
BackgroundImage.src = 'back.png';
BackgroundImage.height = canvas.height;
let _x = 0;
function animate(){
    context.save();
    requestAnimationFrame(animate);
    if(_x <= -1279){
        _x = 0;
    }
    context.drawImage(BackgroundImage, _x, 0);
    _x--;
    context.restore();
    console.log(_x)
    
}
animate();