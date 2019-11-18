import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { hijo } from 'src/app/modelos/hijo';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-lista-hijos',
  templateUrl: './lista-hijos.component.html',
  styleUrls: ['./lista-hijos.component.css']
})
export class ListaHijosComponent implements OnInit {
 hijos: any;
 columsToDisplay = ['id_hijo','ti','nombre','apellido','alergia','direccion','telefono','opciones']
 dataSource: MatTableDataSource<hijo>; 
 constructor(
   private serviciosService: ServiciosService
 ) { }

  ngOnInit() {
    this.obtenerHijos();
  }

  obtenerHijos(){
    this.serviciosService.listarHijos().subscribe(
      hijo => {
        console.log(hijo)
        this.hijos = hijo;
        this.dataSource = new MatTableDataSource<hijo>(this.hijos);
      }
    )
  }
}
