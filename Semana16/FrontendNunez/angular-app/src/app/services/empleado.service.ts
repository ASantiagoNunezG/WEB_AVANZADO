// src/app/services/empleado.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Importar AuthService para obtener el token

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:8080/empleados'; // Cambiar a tu URL de API

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Método para incluir el token en las solicitudes
  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // Obtener el token del AuthService
    return new HttpHeaders({
      Authorization: `Bearer ${token}` // Agregar el token a la cabecera
    });
  }

  // Obtener todos los empleados
  getEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  // Crear un nuevo empleado
  createEmpleado(empleado: any): Observable<any> {
    return this.http.post(this.apiUrl, empleado, { headers: this.getHeaders() });
  }

  // Actualizar un empleado existente
  updateEmpleado(id: number, empleado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, empleado, { headers: this.getHeaders() });
  }

  // Eliminar un empleado
  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
