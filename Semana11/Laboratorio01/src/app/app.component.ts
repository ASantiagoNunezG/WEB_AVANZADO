import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports:[RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apli01';
  valor = "Nuñez Garcia A. Santiago";
  tipo = "password";
  img = "assets/angular.png";
  enlace = "https://youtube.com";
  clase01 = "azul";
  clase02 = "rojo";
  alttxt = "Imagen increible";
}
