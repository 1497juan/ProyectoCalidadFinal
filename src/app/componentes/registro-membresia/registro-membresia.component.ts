import { Component, OnInit } from '@angular/core';
import { membresia } from 'src/app/modelos/membresia';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-registro-membresia',
  templateUrl: './registro-membresia.component.html',
  styleUrls: ['./registro-membresia.component.css']
})
export class RegistroMembresiaComponent implements OnInit {
  membresia: membresia = {
    id_membresia: 0,
    tipo_lonchera: '',
    cantidad_lonchera: null,
    costo: null,
    numeroProductos: null,
    id_lonchera: 0
  };
  constructor(
    private serviciosService: ServiciosService
  ) { }

  ngOnInit() {
  }
  nuevaMembresia() {
    // console.log(this.membresia)
    this.serviciosService.guardarMembresia(this.membresia).subscribe(
      respuesta => {
        alert("Nueva membresia creada correctamente.");
      }
    );
  }
}
