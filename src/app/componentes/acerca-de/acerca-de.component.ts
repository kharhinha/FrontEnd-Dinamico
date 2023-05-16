import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { DatosService } from 'src/app/servicios/datos.service';
import { PersonaService } from 'src/app/servicios/persona.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  //acerca:any;
  //constructor(private datosPorfolio: DatosService){} ---Para conexion json

  /*ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.acerca=data;
  });}---para conexion json*/
  persona: Persona = new Persona(" ", " ", " ");

  constructor(public personaService: PersonaService) {
  }

  ngOnInit(): void {
  }

  buscar(id:string): void {
    this.personaService.buscar(id).subscribe(data => {
      this.persona = data
    });
  }
}
