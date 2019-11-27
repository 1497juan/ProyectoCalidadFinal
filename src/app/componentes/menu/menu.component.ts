import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { cliente } from 'src/app/modelos/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogin: boolean;
  mobileQuery: MediaQueryList;
  shouldRun = true;
  usuario: any;
  userShow: string;
  tipoDeMenu: string;
  id_cliente: number;
  // fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  fillerAdmin = [
    { name: "Registrar Cliente", route: "/registroCliente" },
    { name: "Registrar Membresia", route: "/registroMembresia" },
    { name: "Registrar Proveedor", route: "/registroProveedor" },
    { name: "Clientes", route: "/listaClientes" },
    { name: "Hijos", route: "/listaHijos" },
    { name: "Productos", route: "/listaProductos" },
    { name: "Proveedores", route: "/listaProveedores" },
    { name: "Membresias", route: "/listaMembresias" },
  ];
  fillerUser = [
    { name: "Productos", route: "/listaProductos" },
    { name: "Proveedores", route: "/listaProveedores" },
      // { name: "Hijos", route: "/listaHijos" },

  ]

  fillerContent = Array.from({ length: 50 }, () => '');

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher, private router: Router
  ) {
    this.isLogin = false;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.obtenerLocalStorge();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  obtenerLocalStorge() {
    this.usuario = JSON.parse(localStorage.getItem("persona"));
    // console.log(this.usuario)
  }

  cerrarSesion() {
    let persona: object = [];
    localStorage.setItem("persona", JSON.stringify(persona));
    alert("Hasta pronto!!")
    this.shouldRun = false;
  }

  mostrarMenu() {
    let usuario = localStorage.getItem("persona");
    if (usuario === '[]' || null) {
      this.isLogin = false;
      this.userShow = "No Login"
      return false;
    } else {
      this.isLogin = true;
      this.usuario = JSON.parse(localStorage.getItem("persona"));
      this.userShow = this.usuario[0].nombre;
      if (this.usuario[0].nombre == "admin") {
        this.tipoDeMenu = "showAdmin";
      } else {
        this.tipoDeMenu = "showUser";
        this.id_cliente = this.usuario[0].id_cliente;
      }
      return true;
    }

  }

  goToHijos() {
    this.router.navigate(["/ingresar", this.id_cliente, 'listaHijos'])
  }
}

