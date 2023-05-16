
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-agregar-exp',
  templateUrl: './agregar-exp.component.html',
  styleUrls: ['./agregar-exp.component.css']
})
export class AgregarExpComponent implements OnInit {
  puesto: string ='';
  logo: string='';
  lugarTrabajo: string='';
  fechaInicio!: Date;
  fechaFin!: Date;
  descripcion: string='';

  constructor(private serviceExp: ExperienciaService, private router: Router) { }
  ngOnInit(): void { }

  crear(): void {//llamado desde agregar.html
   const experiencia = new Experiencia(this.puesto, this.logo,this.lugarTrabajo,this.fechaInicio,this.fechaFin, this.descripcion);
   this.serviceExp.crear(experiencia).subscribe(
    data=>{ alert("Experiencia nueva agregada"); this.router.navigate([''])},
    error=>{ alert("No se puedo agregar la experiencia");this.router.navigate([''])}
    )
  }

}
