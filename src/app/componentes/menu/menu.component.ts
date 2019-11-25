import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    { name: "Registrar Cliente", route: "/registroCliente" },
    { name: "Registrar Membresia", route: "/registroMembresia" },
    { name: "Registrar Proveedor", route: "/registroProveedor" },
    { name: "Clientes", route: "/listaClientes" },
    { name: "Hijos", route: "/listaHijos" },
    { name: "Productos", route: "/listaProductos" },
    { name: "Proveedores", route: "/listaProveedores" },
    { name: "Membresias", route: "/listaMembresias" },
  ];

  fillerContent = Array.from({ length: 50 }, () => '');

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    console.log('Me ejecute')
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
}

