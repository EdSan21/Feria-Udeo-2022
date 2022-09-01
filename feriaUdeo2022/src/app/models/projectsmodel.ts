export class Project {
    idProyecto: number;
    titulo: string;
    video: string;
    descripcion: string;
    imgCarta: string;
    categoria: string;
    idcategoria: number;
    

    constructor(idProyecto = 0, titulo = '', video = '', descripcion = '', imgCarta = '', categoria = '', idcategoria = 0) {
        this.idProyecto = idProyecto
        this.titulo = titulo
        this.video = video
        this.descripcion = descripcion
        this.imgCarta = imgCarta
        this.categoria=categoria
        this.idcategoria=idcategoria

    }
}
export class categoriasProject {
    idCategoria: number;
    nombre: string;

    constructor(idCategoria = 0, nombre = '') {
        this.idCategoria = idCategoria
        this.nombre = nombre
    }
}

export class Projectpage {
    categorias: categoriasProject[];
    emision: Project[];
    proyectos: Project[];

    constructor(categorias: categoriasProject[], emision :Project[], proyectos:Project[]) {
        this.categorias=categorias
        this.emision=emision
        this.proyectos=proyectos
    }
}