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

ctx.fillStyle = "green";    
let second = 1000;
let fps = 60;

let circle = {
    color: "blue"
}

// draw function
setInterval(() => {
    clearCanvas();
    updateBallPosition();
    drawShapes();
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
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fill();
}

function drawRectangle() {
    ctx.fillStyle = "green";
    ctx.fillRect(250, 250, 200, 200);

}

function drawShapes() {
    drawRectangle(); 
    drawBall();
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