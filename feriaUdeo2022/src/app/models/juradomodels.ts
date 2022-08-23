export class Jurado {
    id: number;
    name: string;
    image: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;

    constructor(id = 0, name = '', image = '') {
        this.id = id
        this.name = name
        this.image = image
    }
}