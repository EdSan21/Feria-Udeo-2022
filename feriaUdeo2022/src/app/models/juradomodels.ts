export class Jurado {
    nombre1: string;
    nombre2: string;
    apellido1: string;
    apellido2: string;
    imagen: string;
    titulo:string;
    informacion:string;

    constructor( nombre1 = '',nombre2 = '',apellido1 = '',apellido2 = '', imagen = '',titulo='',informacion='') {
        this.nombre1 = nombre1
        this.nombre2 = nombre2
        this.apellido1 = apellido1
        this.apellido2 = apellido2
        this.imagen = imagen
        this.titulo=titulo
        this.informacion=informacion
    }
}

export class JuradoPage {
    tipo: string;
    lista:Jurado[];

    constructor(  tipo: string,lista: Jurado[]) {
        this.tipo = tipo
        this.lista = lista

    }
}
