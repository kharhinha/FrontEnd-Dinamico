import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { DatosService } from 'src/app/servicios/datos.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experiencia: Experiencia[] =[];

  constructor(private expService:ExperienciaService,private router: Router){
  }
  //esta logueado?
  enLogin =false;
  ngOnInit(): void{

    this.listarExperiencia();
    if(this.enLogin){
      this.enLogin=true;
    }else{
      this.enLogin=false;
    }
  }

  listarExperiencia():void{
    this.expService.listar().subscribe(data =>{this.experiencia =data;});
  }

  delete(id:string):void{
    this.expService.borrar(id).subscribe(data =>{this.listarExperiencia},
      error=>{ alert("No se puedo borrar la experiencia");this.router.navigate([''])}
    );
  }
}
