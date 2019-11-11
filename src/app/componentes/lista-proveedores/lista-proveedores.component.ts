import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { MatTableDataSource } from '@angular/material';
import { proveedor } from 'src/app/modelos/proveedor';

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
    private serviciosService: ServiciosService
  ) { }

  ngOnInit() {
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.serviciosService.listarProveedores().subscribe(
      prov => {
        this.prov = prov;
        this.dataSource = new MatTableDataSource<proveedor>(this.prov);
        console.log(prov);
      }
    )
  }
}
