import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-lonchera-hijo',
  templateUrl: './lonchera-hijo.component.html',
  styleUrls: ['./lonchera-hijo.component.css']
})
export class LoncheraHijoComponent implements OnInit {

  producto: any;
  id_hijo: string
  texto: string;
  array: any[];
  productos: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private serviciosService: ServiciosService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramms => {
      this.id_hijo = paramms.get("id")
      // console.log(this.id_hijo);
      this.serviciosService.loncheraHijoEspecifico(this.id_hijo).subscribe(
        informacion => {
          this.texto = informacion["lista_productos"];
          // console.log(this.texto) 
          this.array = this.texto.split(",");
          // console.log(this.array)

          this.array.forEach(producto => {
            this.serviciosService.listaProductosLonchera(producto).subscribe(
              prod => {
                this.producto = prod;
                // console.log(this.producto);
                this.productos.push(this.producto)
                // console.log(this.productos);

              }
            )
          }
          )
        }
      )

    })
  }

}
