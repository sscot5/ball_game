let canvasElement = document.createElement('canvas');
canvasElement.width = innerWidth;
canvasElement.height = innerHeight;
let ctx = canvasElement.getContext("2d");
document.body.prepend(canvasElement);

// static varibles
let x = 50;
let y = 50;
ctx.fillStyle = "green";    
let second = 1000;
let gameFrames = 60;
let fps = second / gameFrames;

// draw function
setInterval(() => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    x += 1;
    y += 1;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fill();

}, fps);


