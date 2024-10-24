import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  standalone: true,   
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dia?:string;
  /*personas:Persona[] =[
    {nombre: "Nuñez", edad:25},
    {nombre: "Abraham", edad:21},
  ]*/
  //cargos = ['CEO','Programador', 'Analista', 'Administrador de BD', 'Diseñador'];
  nombre!:string;
  title = 'apli01Nunez';
}
