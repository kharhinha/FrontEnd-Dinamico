export class Educacion {
    id?: string;
    instituto: string;
    provincia: string;
    titulo: string;
    logo: string;
    fechaFin: Date;

    constructor(instituto:string,provincia:string,titulo:string,logo:string,fechaFin:Date) {
        this.instituto = instituto;
        this.provincia = provincia;
        this.titulo = titulo;
        this.logo = logo;
        this.fechaFin = fechaFin;
    }
}
