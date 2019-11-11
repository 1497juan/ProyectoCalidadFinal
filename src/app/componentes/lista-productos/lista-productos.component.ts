import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: any;
  constructor(
    private serviciosService: ServiciosService) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.serviciosService.listarProductos().subscribe(
      producto => {
        this.productos = producto;
        console.log(this.productos)
      }
    )
  }
}
