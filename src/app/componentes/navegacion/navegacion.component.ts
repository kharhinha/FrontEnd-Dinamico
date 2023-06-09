import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit{
  barra:any;
  constructor(private datosPorfolio: DatosService){
  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.barra=data;
    });
  }
}
