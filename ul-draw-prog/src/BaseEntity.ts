import Konva from 'konva'

export abstract class BaseEntity {
    uuid: string;
    x: number;
    y: number;
    constructor(uuid: string,x: number, y: number) {
        this.uuid = uuid;

        this.x = x;
        this.y = y;
        
    }
}