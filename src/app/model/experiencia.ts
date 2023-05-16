export class Experiencia {
    id?: string;
    puesto: string;
    logo: string;
    lugarTrabajo: string;
    fechaInicio: Date;
    fechaFin: Date;
    descripcion: string;

    constructor(puesto:string, logo:string,lugarTrabajo:string,fechaInicio:Date,fechaFin:Date, descripcion:string){
        this.puesto = puesto;
        this.logo = logo;
        this.lugarTrabajo =lugarTrabajo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
    }

  
}
