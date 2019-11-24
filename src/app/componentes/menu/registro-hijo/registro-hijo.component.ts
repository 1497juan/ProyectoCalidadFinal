import { Component, OnInit } from '@angular/core';
import { hijo } from 'src/app/modelos/hijo';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro-hijo',
  templateUrl: './registro-hijo.component.html',
  styleUrls: ['./registro-hijo.component.css']
})
export class RegistroHijoComponent implements OnInit {

  membresia: any;
  hijo: hijo = {
    id_hijo: 0,
    ti: '',
    nombre: '',
    apellido: '',
    alergia: '',
    direccion: '',
    telefono: '',
    id_cliente: 0,
    id_membresia: 0
  };

  constructor(
    private serviciosservice: ServiciosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramms => {
      // console.log(paramms.get("id"))
      this.hijo.id_cliente = parseInt(paramms.get("id"));
    })
    this.listaMembresias();
  }

  listaMembresias() {
    this.serviciosservice.listaMembresias().subscribe(
      membresia => {
        this.membresia = membresia;
        // console.log(this.membresia)
      }
    )
  }

  crearHijo() {
    // console.log(this.hijo)
    this.serviciosservice.guardarHijo(this.hijo).subscribe(
      respuesta => {
        alert("Hijo registrado correctamente.");
        this.router.navigate(["/listaClientes", this.hijo.id_cliente, 'listaHijos'])
      }
    );
  }

}
