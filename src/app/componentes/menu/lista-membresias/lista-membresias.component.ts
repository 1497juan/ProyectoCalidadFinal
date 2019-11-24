import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { membresia } from 'src/app/modelos/membresia';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lista-membresias',
  templateUrl: './lista-membresias.component.html',
  styleUrls: ['./lista-membresias.component.css']
})
export class ListaMembresiasComponent implements OnInit {

  membresias: any;
  columsToDisplay = ['id', 'nombre', 'numero', 'costo', 'cantidad', 'opciones'];
  dataSource: MatTableDataSource<membresia>;

  constructor(
    private serviciosService: ServiciosService
  ) { }

  ngOnInit() {
    this.listaMembresias();
  }

  listaMembresias() {
    this.serviciosService.listaMembresias().subscribe(
      membresia => {
        this.membresias = membresia;
        // console.log(membresia)
        this.dataSource = new MatTableDataSource<membresia>(this.membresias);
      }
    )
  }

  eliminarMembresia(id_membresia) {
    this.serviciosService.eliminarMembresia(id_membresia).subscribe(
      mensaje => {
        alert("La membresia " + id_membresia + " fue correctamente eliminada.")
        this.listaMembresias();
      }
    );
  }
}
