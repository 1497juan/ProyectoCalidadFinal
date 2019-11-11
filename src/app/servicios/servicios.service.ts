import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cliente } from '../modelos/cliente';
import { hijo } from '../modelos/hijo';
import { membresia } from '../modelos/membresia';
import { proveedor } from '../modelos/proveedor';
import { producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  url = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }


  listarClientes() {
    return this.http.get(`${this.url}/clientes`)
  }

  listarHijos() {
    return this.http.get(`${this.url}/hijos`)
  }

  listarProductos() {
    return this.http.get(`${this.url}/productos`)
  }

  listarProveedores() {
    return this.http.get(`${this.url}/proveedores`)
  }

  informarcionUsuarioContraseña(correo, contrasena) {
    return this.http.get(`${this.url}/cliente/${correo}/${contrasena}`)
  }

  guardarCliente(cliente: cliente) {
    return this.http.post(`${this.url}/registroCliente`, cliente)
  }

  guardarHijo(hijo: hijo) {
    return this.http.post(`${this.url}/registroHijo`, hijo)
  }

  guardarMembresia(membresia: membresia) {
    return this.http.post(`${this.url}/registroMembresia`, membresia)
  }

  guardarProveedor(proveedor: proveedor) {
    return this.http.post(`${this.url}/registroProveedor`, proveedor)
  }

  guardarProducto(producto: producto) {
    return this.http.post(`${this.url}/registroProducto`, producto)
  }

  buscarHijosCliente(idCliente: number) {
    return this.http.get(`${this.url}/cliente/hijo/${idCliente}`)
  }

  buscarProductoProveedor(idProveedor: number) {
    return this.http.get(`${this.url}/proveedor/producto/${idProveedor}`)
  }
}
