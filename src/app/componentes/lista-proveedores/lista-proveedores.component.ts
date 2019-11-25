import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { MatTableDataSource } from '@angular/material';
import { proveedor } from 'src/app/modelos/proveedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {

  prov: any;
  columsToDisplay = ['id_proveedor', 'nombre', 'direccion', 'telefono', 'opciones'];
  dataSource: MatTableDataSource<proveedor>;
  constructor(
    private serviciosService: ServiciosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.serviciosService.listarProveedores().subscribe(
      prov => {
        this.prov = prov;
        this.dataSource = new MatTableDataSource<proveedor>(this.prov);
        // console.log(prov);
      }
    )
  }

  listaProductos(id_proveedor: number) {
    // console.log(id_proveedor)
    this.router.navigate(["/listaProveedores", id_proveedor, 'listaProductos']);
  }

  eliminarProveedor(id_proveedor) {
    this.serviciosService.eliminarProveedor(id_proveedor).subscribe(
      men => {
        alert("El proveedor fue eliminado correctamente.")
        this.obtenerProveedores();
      }
    )
  }

  agregarProducto(id_proveedor) {
    this.router.navigate(["/listaProveedores", id_proveedor,'registroProducto'])
  }
}
