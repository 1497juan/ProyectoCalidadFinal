import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/modelos/producto';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {
  producto: producto = {
    id_producto: 0,
    nombre_producto: '',
    fecha_vencimiento: null,
    precio: null,
    descripcion: '',
    imagen_producto: '',
    id_lonchera: 0,
    id_proveedor: 0
  }
  constructor(
    private serviciosServices: ServiciosService
  ) { }

  ngOnInit() {
  }

  crearProducto(){
    console.log(this.producto)
    this.serviciosServices.guardarProducto(this.producto).subscribe(
      respuesta => {
        alert("Producto creado correctamente.");
      }
    );

  }
}
