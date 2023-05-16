import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion-service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educar: Educacion = null;
  constructor(private serviceEdu: EducacionService, private router: Router, private activarRout: ActivatedRoute) { };
  ngOnInit(): void {
    const id = this.activarRout.snapshot.params['id'];
    this.serviceEdu.buscar(id).subscribe(data => { this.educar = data; })
  }

  edicion(): void {
    const id = this.activarRout.snapshot.params['id'];
    this.serviceEdu.modificar(id, this.educar).subscribe(
      data => { alert("Educacion modificada"); this.router.navigate(['']) },
      error => { alert("No se logro modificar"); this.router.navigate(['']) }
    )
  }
}
