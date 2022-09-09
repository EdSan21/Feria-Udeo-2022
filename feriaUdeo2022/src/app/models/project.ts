export class Project {
    id: number;
    nameProject: string;
    urlVideo: string;
    description: string;

    constructor(id = 0, nameProyect = '', urlVideo = '', description = '') {
        this.id = id
        this.nameProject = nameProyect
        this.urlVideo = urlVideo
        this.description = description
    }
}