import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion-service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{
  instituto: string ='';
  provincia: string ='';
  titulo: string ='';
  logo: string ='';
  fechaFin!: Date;

  constructor(private serviceEdu:EducacionService, private router: Router) { }
  ngOnInit(): void{}

  crear(): void {//llamado desde agregar.html
    const educacion = new Educacion(this.instituto,this.provincia,this.titulo,this.logo,this.fechaFin );
    this.serviceEdu.crear(educacion).subscribe(
     data=>{ alert("Educacion agregada"); this.router.navigate([''])},
     error=>{ alert("Carga de datos fallida");this.router.navigate([''])}
     )
   }
}
