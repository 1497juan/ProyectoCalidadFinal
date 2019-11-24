import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroclienteComponent } from './componentes/registrocliente/registrocliente.component';
import { ListaClientesComponent } from './componentes/menu/lista-clientes/lista-clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './componentes/menu/menu.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { ServiciosService } from './servicios/servicios.service'
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatDialogRef, MatDialog, MatRadioModule, MatTooltipModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RegistroHijoComponent } from './componentes/menu/registro-hijo/registro-hijo.component';
import { RegistroMembresiaComponent } from './componentes/menu/registro-membresia/registro-membresia.component';
import { RegistroProveedorComponent } from './componentes/menu/registro-proveedor/registro-proveedor.component';
import { RegistroProductoComponent } from './componentes/menu/registro-producto/registro-producto.component';
import { ListaHijosComponent } from './componentes/menu/lista-hijos/lista-hijos.component';
import { ListaProveedoresComponent } from './componentes/menu/lista-proveedores/lista-proveedores.component';
import { ListaProductosComponent } from './componentes/menu/lista-productos/lista-productos.component';
import { ListaHijosClienteComponent } from './componentes/menu/lista-hijos-cliente/lista-hijos-cliente.component';
import { ListaProductosProveedorComponent } from './componentes/menu/lista-productos-proveedor/lista-productos-proveedor.component';
import { ListaMembresiasComponent } from './componentes/menu/lista-membresias/lista-membresias.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroclienteComponent,
    ListaClientesComponent,
    MenuComponent,
    IngresarComponent,
    RegistroHijoComponent,
    RegistroMembresiaComponent,
    RegistroProveedorComponent,
    RegistroProductoComponent,
    ListaHijosComponent,
    ListaProveedoresComponent,
    ListaProductosComponent,
    ListaHijosClienteComponent,
    ListaProductosProveedorComponent,
    ListaMembresiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatRadioModule,
    MatTooltipModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
