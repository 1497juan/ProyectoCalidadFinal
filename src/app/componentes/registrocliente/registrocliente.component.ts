import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/modelos/cliente';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.component.html',
  styleUrls: ['./registrocliente.component.css']
})
export class RegistroclienteComponent implements OnInit {
  cliente: cliente = {
    id_cliente: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    numero_hijos: null
  };

  constructor(
    private serviciosservice: ServiciosService
  ) { }

  ngOnInit() {
  }

  crearCliente() {
    console.log(this.cliente)
    this.serviciosservice.guardarCliente(this.cliente).subscribe(
      respuesta => {
        alert("Cliente creado correctamente.");
      }
    );
  }
}
