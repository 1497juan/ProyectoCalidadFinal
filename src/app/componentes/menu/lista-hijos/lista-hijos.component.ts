import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { hijo } from 'src/app/modelos/hijo';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-hijos',
  templateUrl: './lista-hijos.component.html',
  styleUrls: ['./lista-hijos.component.css']
})
export class ListaHijosComponent implements OnInit {

  hijos: any;
  id: string;
  columsToDisplay = ['id', 'ti', 'nombre', 'direccion', 'telefono', 'membresia', 'opciones']
  dataSource: MatTableDataSource<hijo>;
  membresia: any;

  constructor(
    private serviciosService: ServiciosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.obtenerHijos();
    this.listaMembresias();
  }

  obtenerHijos() {
    this.serviciosService.listarHijos().subscribe(
      hijo => {
        // console.log(hijo)
        this.hijos = hijo;
        this.dataSource = new MatTableDataSource<hijo>(this.hijos);
      }
    )
  }

  listaMembresias() {
    this.serviciosService.listaMembresias().subscribe(
      membresia => {
        this.membresia = membresia;
        //console.log(this.membresia)
      }
    )
  }

  eliminarHijo(id_hijo) {
    this.serviciosService.eliminarHijo(id_hijo).subscribe(
      res => {
        // console.log(res);
        this.obtenerHijos();
      }
    )
  }
}
