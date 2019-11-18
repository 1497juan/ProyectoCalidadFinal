import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClientesComponent } from './componentes/menu/lista-clientes/lista-clientes.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { RegistroclienteComponent } from './componentes/registrocliente/registrocliente.component';
import { RegistroHijoComponent } from './componentes/menu/registro-hijo/registro-hijo.component';
import { RegistroMembresiaComponent } from './componentes/menu/registro-membresia/registro-membresia.component';
import { RegistroProductoComponent } from './componentes/menu/registro-producto/registro-producto.component';
import { RegistroProveedorComponent } from './componentes/menu/registro-proveedor/registro-proveedor.component';
import { ListaHijosComponent } from './componentes/menu/lista-hijos/lista-hijos.component';
import { ListaProductosComponent } from './componentes/menu/lista-productos/lista-productos.component';
import { ListaProveedoresComponent } from './componentes/menu/lista-proveedores/lista-proveedores.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: IngresarComponent },
  { path: 'listaClientes', component: ListaClientesComponent },
  { path: 'registroCliente', component: RegistroclienteComponent },
  { path: 'registroHijo', component: RegistroHijoComponent },
  { path: 'registroMembresia', component: RegistroMembresiaComponent },
  { path: 'registroProducto', component: RegistroProductoComponent },
  { path: 'registroProveedor', component: RegistroProveedorComponent },
  { path: 'listaHijos', component: ListaHijosComponent },
  { path: 'listaProductos', component: ListaProductosComponent },
  { path: 'listaProveedores', component: ListaProveedoresComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
