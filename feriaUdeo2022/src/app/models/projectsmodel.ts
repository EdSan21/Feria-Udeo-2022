export class Project {
    id: number;
    nameProject: string;
    urlVideo: string;
    description: string;
    image: string;

    constructor(id = 0, nameProyect = '', urlVideo = '', description = '', image = '') {
        this.id = id
        this.nameProject = nameProyect
        this.urlVideo = urlVideo
        this.description = description
        this.image = image
    }
}