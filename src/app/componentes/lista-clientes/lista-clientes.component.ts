import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { cliente } from 'src/app/modelos/cliente';
import { hijo } from 'src/app/modelos/hijo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  hijo: hijo
  clientes: any;
  columsToDisplay = ['id_cliente', 'nombre', 'correo', 'cedula', 'opciones'];
  dataSource: MatTableDataSource<cliente>;

  constructor(
    private serviciosService: ServiciosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {

    this.serviciosService.listarClientes().subscribe(
      cliente => {
        this.clientes = cliente;
        this.dataSource = new MatTableDataSource<cliente>(this.clientes);
        // console.log(this.clientes)
      }
    );
  }

  listahijo(id_cliente: number) {
    // console.log(id_cliente);
    this.router.navigate(["/listaClientes", id_cliente, 'listaHijos']);
  }

  crearNuevoHijo(id_cliente: number) {
    this.router.navigate(["/listaHijosCliente", id_cliente, 'registroHijo']);
  }

  eliminarCliente(id_cliente) {
    // console.log(id_cliente)
    this.serviciosService.eliminarCliente(id_cliente).subscribe(
      res => {
        // console.log(res)
        this.obtenerClientes();
      },
      error => console.log(error)

    )
  }


}
