import { Ball } from './ball';
import { Point } from './point';
import { Box } from './box';

let canvasElement = document.createElement('canvas');
canvasElement.width = innerWidth;
canvasElement.height = innerHeight;
let ctx = canvasElement.getContext("2d");
document.body.prepend(canvasElement);

// static varibles

ctx.fillStyle = "green";    
let second = 1000;
let fps = 60;

let ball = new Ball(1, 1, "blue", 10);
let box = new Box(1, 1, 250, 200, "green");

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
    ball.position.x += ball.xSpeed;
    ball.position.y += ball.ySpeed;
    checkBounds();
}

function drawBall() {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, ball.radius, 0, Math.PI * 2, true);
    ctx.fill();
}

function drawBox() {
    ctx.fillStyle = "green";
    ctx.fillRect(250, 250, 200, 200);
}

function drawShapes() {
    drawBox(); 
    drawBall();
}

function checkBounds() {

    if (ball.position.x < 0 + ball.radius) {
        ball.xSpeed = ball.speed;
    }
    if (ball.position.x > innerWidth - ball.radius) {
        ball.xSpeed = -ball.speed;
    }
    if (ball.position.y < 0 + ball.radius) {
        ball.ySpeed = ball.speed;
    }
    if (ball.position.y > innerHeight - ball.radius) {
        ball.ySpeed = -ball.speed;
    }
}