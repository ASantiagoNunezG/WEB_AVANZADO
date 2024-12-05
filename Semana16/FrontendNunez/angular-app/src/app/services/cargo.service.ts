// src/app/services/cargo.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Importar AuthService para obtener el token

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private apiUrl = 'http://localhost:8080/cargos'; // Cambiar a tu URL de API

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Método para incluir el token en las solicitudes
  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // Obtener el token del AuthService
    return new HttpHeaders({
      Authorization: `Bearer ${token}` // Agregar el token a la cabecera
    });
  }

  // Obtener todos los cargos
  getCargos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  // Crear un nuevo cargo
  createCargo(cargo: any): Observable<any> {
    return this.http.post(this.apiUrl, cargo, { headers: this.getHeaders() });
  }

  // Actualizar un cargo existente
  updateCargo(id: number, cargo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, cargo, { headers: this.getHeaders() });
  }

  // Eliminar un cargo
  deleteCargo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}