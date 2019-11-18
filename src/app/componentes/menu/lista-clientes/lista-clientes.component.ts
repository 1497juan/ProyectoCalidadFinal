import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { cliente } from 'src/app/modelos/cliente';
import { hijo } from 'src/app/modelos/hijo';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  hijo: hijo
  clientes: any;
  columsToDisplay = ['id_cliente', 'nombre', 'apellido', 'correo', 'hijos', 'dhijos', 'opciones'];
  dataSource: MatTableDataSource<cliente>;

  constructor(
    private serviciosService: ServiciosService,
  ) { }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {

    this.serviciosService.listarClientes().subscribe(
      cliente => {
        this.clientes = cliente;
        this.dataSource = new MatTableDataSource<cliente>(this.clientes);
        console.log(this.clientes)
      }
    );
  }

  listahijo(hijo) {
    this.hijo = hijo;
    console.log(this.hijo)

  }


}
