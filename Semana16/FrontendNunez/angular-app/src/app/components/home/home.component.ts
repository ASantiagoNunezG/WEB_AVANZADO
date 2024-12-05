import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  empleados: any[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    // Obtener el token del localStorage
    const tokenString = localStorage.getItem('token');
    const token = tokenString ? JSON.parse(tokenString).token : null;

    if (!token) {
      console.error('No se encontró un token válido en el localStorage.');
      return;
    }

    // Crear los encabezados con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Llamar al servicio para obtener los empleados
    this.empleadoService.getEmpleados(headers).subscribe({
      next: (data) => {
        this.empleados = data; // Guardar la lista de empleados
        console.log('Empleados cargados:', data);
      },
      error: (error) => {
        console.error('Error al obtener empleados', error); // Manejar el error
      },
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
