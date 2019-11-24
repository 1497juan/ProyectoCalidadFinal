import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { producto } from 'src/app/modelos/producto';

@Component({
  selector: 'app-lista-productos-proveedor',
  templateUrl: './lista-productos-proveedor.component.html',
  styleUrls: ['./lista-productos-proveedor.component.css']
})
export class ListaProductosProveedorComponent implements OnInit {
  productos: any;
  id: string;
  @HostBinding('class') classes = "row";
  constructor(
    private route: ActivatedRoute,
    private serviciosService: ServiciosService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id_proveedor");
      // console.log(params.get("id_proveedor"));
      if (params.has("id_proveedor")) {
        this.buscarProductos();
      }
    }
    )
  }

  buscarProductos() {
    this.serviciosService.buscarProductoProveedor(this.id).subscribe(
      producto => {
        this.productos = producto;
      }
    )
  }

  eliminarProducto(id_producto) {
    this.serviciosService.eliminarProducto(id_producto).subscribe(men => {
      alert("El producto " + id_producto + " fue correctamente eliminado.")
      this.buscarProductos();
    }
    );
  }

}
