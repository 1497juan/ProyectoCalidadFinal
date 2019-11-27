import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  cuenta: object = [];
  correo: string;
  contrasena: string;

  constructor(
    private serviciosService: ServiciosService,
    private router: Router
  ) {
    this.guardarLocalSorage(this.cuenta);
  }

  ngOnInit() {
  }

  Ingresar() {
    this.serviciosService.informarcionUsuarioContraseña(this.correo, this.contrasena).subscribe(
      cuenta => {
        if (cuenta) {
          this.cuenta = cuenta;
          this.guardarLocalSorage(this.cuenta);
          alert("Bienvenido " + cuenta[0].nombre + "!!");
          if (cuenta[0].nombre != "admin") {
            this.listahijo(cuenta[0].id_cliente);
          } else {
            this.listaClientes();
          }
        }
      }, error => { alert("Usuario o contraseña incorrectos.") }
    )
  }

  listahijo(id_cliente: number) {
    this.router.navigate(["/ingresar", id_cliente, 'listaHijos'])
  }
  listaClientes() {
    this.router.navigate(["/listaClientes"])
  }
  guardarLocalSorage(usuario) {
    // console.log(usuario)
    localStorage.setItem("persona", JSON.stringify(usuario))
  }

}
