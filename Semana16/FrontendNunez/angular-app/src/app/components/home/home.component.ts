import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe({
      next: (data) => {
        this.empleados = data; // Guardar la lista de empleados
        console.log('Empleados cargados:', data);
      },
      error: (error) => {
        console.error('Error al obtener empleados', error); // Manejar el error
      }
    });
  }
  logout(): void {
    this.authService.logout(); // Elimina el token del localStorage
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
  }
}

