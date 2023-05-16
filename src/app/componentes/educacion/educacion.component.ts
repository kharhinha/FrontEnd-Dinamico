import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { DatosService } from 'src/app/servicios/datos.service';
import { EducacionService } from 'src/app/servicios/educacion-service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  constructor(private eduService: EducacionService, private router: Router) {
  }

  //esta logueado?
  enLogin = false;
  ngOnInit(): void {

    this.listarEducacion();
    if (this.enLogin) {
      this.enLogin = true;
    } else {
      this.enLogin = false;
    }
  }

  listarEducacion(): void {
    this.eduService.listar().subscribe(data=>{this.educacion=data});
  }

  delete(id: string) {
    this.eduService.borrar('id').subscribe(data => { this.listarEducacion },
      error => { alert("No se puedo borrar"); this.router.navigate(['']) }
    );
  }
}
