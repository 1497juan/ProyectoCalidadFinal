import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/modelos/producto';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private serviciosServices: ServiciosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.producto.id_proveedor = parseInt(params.get("id_proveedor"));
    })
  }

  crearProducto() {
    // console.log(this.producto)
    this.serviciosServices.guardarProducto(this.producto).subscribe(
      respuesta => {
        alert("Producto creado correctamente.");
        this.router.navigate(["/listaProveedores", this.producto.id_proveedor, 'listaProductos'])
      }
    );

  }
}
