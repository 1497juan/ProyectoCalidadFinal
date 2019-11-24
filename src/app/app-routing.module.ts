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
import { ListaHijosClienteComponent } from './componentes/menu/lista-hijos-cliente/lista-hijos-cliente.component';
import { ListaProductosProveedorComponent } from './componentes/menu/lista-productos-proveedor/lista-productos-proveedor.component';
import { ListaMembresiasComponent } from './componentes/menu/lista-membresias/lista-membresias.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: IngresarComponent },
  { path: 'listaClientes', component: ListaClientesComponent },
  { path: 'registroCliente', component: RegistroclienteComponent },
  { path: 'registroMembresia', component: RegistroMembresiaComponent },
  { path: 'registroProveedor', component: RegistroProveedorComponent },
  { path: 'listaHijos', component: ListaHijosComponent },
  { path: 'listaProductos', component: ListaProductosComponent },
  { path: 'listaProveedores', component: ListaProveedoresComponent },
  { path: 'listaMembresias', component: ListaMembresiasComponent },
  { path: 'listaClientes/:id_cliente/listaHijos', component: ListaHijosClienteComponent },
  { path: 'ingresar/:id_cliente/listaHijos', component: ListaHijosClienteComponent },
  { path: 'listaProveedores/:id_proveedor/listaProductos', component: ListaProductosProveedorComponent },
  { path: 'listaHijosCliente/:id/registroHijo', component: RegistroHijoComponent },
  { path: 'listaProveedores/:id_proveedor/registroProducto', component: RegistroProductoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
