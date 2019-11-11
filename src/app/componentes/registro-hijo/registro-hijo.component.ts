import { Component, OnInit } from '@angular/core';
import { hijo } from 'src/app/modelos/hijo';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-registro-hijo',
  templateUrl: './registro-hijo.component.html',
  styleUrls: ['./registro-hijo.component.css']
})
export class RegistroHijoComponent implements OnInit {

  hijo: hijo = {
    id_hijo: 0,
    ti: '',
    nombre: '',
    apellido: '',
    alergia: '',
    direccion: '',
    telefono: '',
    id_cliente: 0,
    id_membresia: 0
  };

  constructor(
    private serviciosservice: ServiciosService
  ) { }

  ngOnInit() {
  }

  crearHijo() {
    console.log(this.hijo)
    this.serviciosservice.guardarHijo(this.hijo).subscribe(
      respuesta => {
        alert("Hijo registrado correctamente.");
      }
    );
  }

}
