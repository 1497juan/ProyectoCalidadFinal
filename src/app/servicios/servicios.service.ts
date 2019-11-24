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

  //USANDO
  listarClientes() {
    return this.http.get(`${this.url}/clientes`)
  }

  //USANDO
  listarHijos() {
    return this.http.get(`${this.url}/hijos`)
  }

  //USANDO
  listarProductos() {
    return this.http.get(`${this.url}/productos`)
  }

  //USANDO
  listarProveedores() {
    return this.http.get(`${this.url}/proveedores`)
  }
  //USANDO
  listaMembresias() {
    return this.http.get(`${this.url}/membresias`)
  }

  loncheraHijoEspecifico(id_hijo) {
    return this.http.get(`${this.url}/lonchera/hijo/${id_hijo}`)
  }

  listaProductosLonchera(id_lonchera) {
    return this.http.get(`${this.url}/producto/lonchera/${id_lonchera}`)
  }

  listaMembresiasProductos(id_membresia) {
    return this.http.get(`${this.url}/membresia/producto/${id_membresia}`)
  }
  //USANDO
  informarcionUsuarioContraseña(correo, contrasena) {
    return this.http.get(`${this.url}/signin/${correo}/${contrasena}`)
  }

  //USANDO
  buscarHijosCliente(idCliente: string) {
    return this.http.get(`${this.url}/cliente/hijo/${idCliente}`)
  }

  //USANDO
  buscarProductoProveedor(idProveedor: string) {
    return this.http.get(`${this.url}/proveedor/producto/${idProveedor}`)
  }

  //USANDO
  guardarCliente(cliente: cliente) {
    return this.http.post(`${this.url}/registroCliente`, cliente)
  }

  //USANDO
  guardarHijo(hijo: hijo) {
    return this.http.post(`${this.url}/registroHijo`, hijo)
  }

  //USANDO
  guardarMembresia(membresia: membresia) {
    // console.log(membresia)
    return this.http.post(`${this.url}/registroMembresia`, membresia)
  }

  //USANDO
  guardarProveedor(proveedor: proveedor) {
    return this.http.post(`${this.url}/registroProveedor`, proveedor)
  }

  //USANDO
  guardarProducto(producto: producto) {
    return this.http.post(`${this.url}/registroProducto`, producto)
  }

  guardarLonchera(lonchera) {
    return this.http.post(`${this.url}/registroLonchera`, lonchera)
  }

  eliminarCliente(id_cliente: string) {
    return this.http.delete(`${this.url}/cliente/${id_cliente}`)
  }

  eliminarHijo(id_hijo) {
    return this.http.delete(`${this.url}/hijo/${id_hijo}`)
  }

  eliminarProveedor(id_proveedor) {
    return this.http.delete(`${this.url}/proveedor/${id_proveedor}`)
  }

  eliminarProducto(id_producto) {
    return this.http.delete(`${this.url}/producto/${id_producto}`)
  }

  eliminarMembresia(id_membresia) {
    return this.http.delete(`${this.url}/membresia/${id_membresia}`)
  }
}
