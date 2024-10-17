import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
    public nombre_componente: string = 'Clientes Works!'
    public title_empleados: string = 'Concusiones:'
    public subtitle_empleados: string = 'Listado de empleados Nuñez:'
    public l1: string = '1.- Abraham'
    public l2: string = '2.- Santiago'
    public l3: string = '3.- Nuñez'
    public l4: string = '4.- Garcia'
}
