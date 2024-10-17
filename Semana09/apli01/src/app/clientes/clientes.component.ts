import { Component } from "@angular/core";

@Component({
    selector: "cliente",
    templateUrl: './clientes.component.html'
    
})

export class ClientesComponent {
    public nombre_componente: string ='Componente Cliente';
    public listado_clientes: string = 'Santiago, Nuñez, Salvador'
}