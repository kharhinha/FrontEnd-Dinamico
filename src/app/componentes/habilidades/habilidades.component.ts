import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  habiList:any;
  constructor(private datosPorfolio: DatosService){
  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.habiList=data.Habilidades;
    });
  }
}
