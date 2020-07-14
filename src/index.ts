let canvasElement = document.createElement('canvas');
canvasElement.width = innerWidth;
canvasElement.height = innerHeight;
let ctx = canvasElement.getContext("2d");
document.body.prepend(canvasElement);

// static varibles
let speed = 5;
let x = 50;
let xSpeed = speed;
let y = 50;
let ySpeed = speed;

let radius = 10;

ctx.fillStyle = "blue";    
let second = 1000;
let fps = 60;

// draw function
setInterval(() => {
    clearCanvas();
    updateBallPosition();
    drawBall();
}, second / fps);

// updates

function clearCanvas() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
}

function updateBallPosition() {
    x += xSpeed;
    y += ySpeed;
    checkBounds();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fill();
}

function checkBounds() {

    if (x < 0 + radius) {
        xSpeed = speed;
    }
    if (x > innerWidth - radius) {
        xSpeed = -speed;
    }
    if (y < 0 + radius) {
        ySpeed = speed;
    }
    if (y > innerHeight - radius) {
        ySpeed = -speed;
    }
}