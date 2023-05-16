import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {
  //fecha generiaca
  fechaInicio = new Date("2000-11-01"); // 1 de noviembre de 2000
  fechaFin = new Date("2000-03-31"); // 31 de marzo de 2000
  
  exp: Experiencia = new Experiencia("","","",this.fechaInicio ,this.fechaFin ,"");
 
  constructor(private serviceExp: ExperienciaService, private router: Router, private activarRout: ActivatedRoute,private datePipe: DatePipe) { }

  ngOnInit(): void {
    const id = this.activarRout.snapshot.params['id'];
    this.serviceExp.buscar(id).subscribe(data => { this.exp = data; })
  }
  
  edicion(): void {
    const id = this.activarRout.snapshot.params['id'];
    this.serviceExp.modificar(id, this.exp).subscribe(
      data => { alert("Experiencia modificada"); this.router.navigate(['']) },
      error => { alert("No se modifico la experiencia"); this.router.navigate(['']) }
    )
  }

}
