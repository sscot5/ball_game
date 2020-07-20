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
let box = new Box(350, 350, 150, 100, "green");

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
    checkBallCollisionWithBox();
}

function drawBall() {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, ball.radius, 0, Math.PI * 2, true);
    ctx.fill();
}

function drawBox() {
    ctx.fillStyle = "green";
    ctx.fillRect(box.position.x, box.position.y, box.width, box.height);
}

function drawLines() {
    ctx.strokeStyle = "red";
    ctx.strokeRect(0, 0, box.position.x, box.position.y); // a
    ctx.strokeRect(box.position.x, 0, box.width, box.position.y); // b
    ctx.strokeRect(box.position.x + box.width, 0, innerWidth, box.position.y); // c
    ctx.strokeRect(0, box.position.y, box.position.x,box.height); // d
    ctx.strokeRect(box.position.x + box.width, box.position.y, innerWidth, box.height); // f
    ctx.strokeRect(0, 0, box.position.x, innerHeight); // g
    ctx.strokeRect(box.position.x, box.position.y + box.height, box.width, innerHeight); // h
    ctx.strokeRect(box.position.x + box.width, box.position.y + box.height, innerWidth, innerHeight); // i
}

function drawShapes() {
    drawBox(); 
    drawBall();
    drawLines();

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

function checkIfBallIsOnLeftSideOfBox(): boolean {
    return ball.position.x + ball.radius < box.position.x;
}

function checkIfBallIsInHorizontalBoxZone(): boolean {
    return ball.position.y > box.position.y && ball.position.y < box.position.y + box.height;
}

function ChangeDirectionOfBall(): void {
    ball.xSpeed = -ball.xSpeed;
}

function checkBallCollisionWithBox(): boolean {
    if (checkIfBallIsOnLeftSideOfBox() && checkIfBallIsInHorizontalBoxZone()) {
        return 
    
    }

}