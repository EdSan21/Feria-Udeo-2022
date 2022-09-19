export class Project {
    id: number;
    nameProject: string;
    description: string;

    constructor(id = 0, nameProyect = '', description = '') {
        this.id = id
        this.nameProject = nameProyect
        this.description = description
    }
}