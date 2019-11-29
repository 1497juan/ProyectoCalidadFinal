import { Component, OnInit } from '@angular/core';
import { lonchera } from 'src/app/modelos/lonchera';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nueva-lonchera',
  templateUrl: './nueva-lonchera.component.html',
  styleUrls: ['./nueva-lonchera.component.css']
})
export class NuevaLoncheraComponent implements OnInit {

  lonchera: lonchera = {
    id_lonchera: 0,
    cantidad_producto: 0,
    descripcion: "ninguna",
    lista_productos: "",
    id_membresia: 0,
    id_producto: 0,
    id_hijo: 0
  };
  membresia: string;
  constructor(
    private serviciosService: ServiciosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramms => {
      this.lonchera.id_hijo = parseInt(paramms.get("id"));
      this.lonchera.id_membresia = parseInt(paramms.get("id_membresia"));
      this.membresia = paramms.get("id_membresia");
      // console.log(this.membresia)
      this.serviciosService.informacionMembresia(this.membresia).subscribe(
        valor => {
          this.lonchera.cantidad_producto = valor[0].numeroProductos;
        //  console.log(valor);
        }
      )
    })
  }
  crearLonchera() {
    console.log(this.lonchera)
    this.serviciosService.guardarLonchera(this.lonchera).subscribe(
      respuesta => {
        alert("La lonchera de tu hijo con ID " + this.lonchera.id_hijo + " se a creado correctamente.")
      }
    )
  }

}
