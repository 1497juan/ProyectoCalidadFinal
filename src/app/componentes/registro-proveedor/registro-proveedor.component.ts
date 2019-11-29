import { Component, OnInit } from '@angular/core';
import { proveedor } from 'src/app/modelos/proveedor';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.css']
})
export class RegistroProveedorComponent implements OnInit {

  proveedor: proveedor = {
    id_proveedor: 0,
    nombre: '',
    direccion:'',
    telefono: ''
  }
  constructor(
    private serviciosservice: ServiciosService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  crearProveedor() {
    // console.log(this.proveedor)
    this.serviciosservice.guardarProveedor(this.proveedor).subscribe(
      respuesta => {
        alert("Proveedor creado correctamente.");
        this.router.navigate(["/listaProveedores"])
      }
    );
  }
}
