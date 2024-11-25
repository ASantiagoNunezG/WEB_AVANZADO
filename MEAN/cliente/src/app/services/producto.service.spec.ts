import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
//import { TestBed } from '@angular/core/testing';

//import { ProductoService } from './producto.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService{
  url = 'http://localhost:4000/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarProducto(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarProducto(producto: Producto): Observable<any>{
    return this.http.post(this.url, producto);
  }

  obtenerProducto(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
}
