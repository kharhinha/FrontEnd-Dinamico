export class Persona {
    id?: string;
    nombre: string;
    apellido: string;
    titulo:string;

    constructor(nombre:string,apellido:string,titulo:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
    }
}
