import { Point} from './point';

export class Circle {
    point: Point;
    color: string;
    radius: number;

    constructor(point: Point, color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }
}
