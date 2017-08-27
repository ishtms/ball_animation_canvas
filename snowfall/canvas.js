let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

var BackgroundImage = new Image();
BackgroundImage.src = 'back.jpg';

function animate(){
    context.save();
    requestAnimationFrame(animate)
    context.clearRect(0,0,canvas.width, canvas.height);
    context.drawImage(BackgroundImage, 0, 0, canvas.width, canvas.height)

    //animating particles here

    context.restore();
}
animate();
