import {Point} from './point';
export class Box {
    position: Point;
    width: number;
    height: number;
    color: string;

    constructor(x:number, y:number, width:number, height:number, color:string) {
       this.position = {x, y};
       this.width = width;
       this.height = height;
       this.color = color;
    }
}

