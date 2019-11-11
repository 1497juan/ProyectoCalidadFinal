import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClientesComponent } from './componentes/lista-clientes/lista-clientes.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { RegistroclienteComponent } from './componentes/registrocliente/registrocliente.component';
import { RegistroHijoComponent } from './componentes/registro-hijo/registro-hijo.component';
import { RegistroMembresiaComponent } from './componentes/registro-membresia/registro-membresia.component';
import { RegistroProductoComponent } from './componentes/registro-producto/registro-producto.component';
import { RegistroProveedorComponent } from './componentes/registro-proveedor/registro-proveedor.component';
import { ListaHijosComponent } from './componentes/lista-hijos/lista-hijos.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { ListaProveedoresComponent } from './componentes/lista-proveedores/lista-proveedores.component';
import { ListaHijosClienteComponent } from './componentes/lista-hijos-cliente/lista-hijos-cliente.component';
import { ListaProductosProveedorComponent } from './componentes/lista-productos-proveedor/lista-productos-proveedor.component';


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
  { path: 'listaHijosCliente', component: ListaHijosClienteComponent },
  { path: 'listaProductosProveedor', component: ListaProductosProveedorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
