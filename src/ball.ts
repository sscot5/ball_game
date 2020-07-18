import { Point} from './point';

export class Ball {
    position: Point;
    color: string;
    radius: number;
    speed: number = 5;
    xSpeed: number = this.speed;
    ySpeed: number = this.speed;

    constructor(x: number, y: number, color: string, radius: number) {
        this.position = {x, y};
        this.color = color;
        this.radius = radius;
    }
}
