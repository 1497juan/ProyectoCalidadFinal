import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { MatTableDataSource } from '@angular/material';
import { hijo } from 'src/app/modelos/hijo';

@Component({
  selector: 'app-lista-hijos-cliente',
  templateUrl: './lista-hijos-cliente.component.html',
  styleUrls: ['./lista-hijos-cliente.component.css']
})
export class ListaHijosClienteComponent implements OnInit {

  hijos: any;
  membresia: any;
  id: string;
  columsToDisplay = ['ti', 'nombre', 'direccion', 'telefono', 'membresia', 'opciones']
  dataSource: MatTableDataSource<hijo>;

  constructor(
    private route: ActivatedRoute,
    private serviciosService: ServiciosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listaMembresias();
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id_cliente");
      // console.log(params.get("id_cliente"))
      if (params.has("id_cliente")) {
        this.listaHijos(this.id);
      }
    });
  }

  listaMembresias() {
    this.serviciosService.listaMembresias().subscribe(
      membresia => {
        this.membresia = membresia;
        // console.log(this.membresia)
      }
    )
  }

  listaHijos(id) {
    this.serviciosService.buscarHijosCliente(id).subscribe(
      hijo => {
        this.hijos = hijo
        this.dataSource = new MatTableDataSource<hijo>(this.hijos);
      }
    )
  }

  eliminarHijo(id_hijo) {
    this.serviciosService.eliminarHijo(id_hijo).subscribe(
      res => {
        // console.log(res);
        this.listaHijos(this.id);
      }
    )
  }

  nuevoHijo() {
    // console.log(this.id)
    this.router.navigate(["/listaHijosCliente", this.id, 'registroHijo']);
  }
}
