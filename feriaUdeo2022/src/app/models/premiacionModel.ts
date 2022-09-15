import { Project } from "./projectsmodel";

export interface podioModel {
    idProyecto: number;
    titulo: string;
    imagen: string;
    categoria: string;
}


export interface GanadoresCategoria {
    categoria: string;
    ganadores: Project[];
}



export interface PremiacionModel {
    primerLugar: podioModel;
    segundoLugar: podioModel;
    tercerLugar: podioModel;
    reconocimientos: Project[];
    ganadoresCategorias: GanadoresCategoria[];
}