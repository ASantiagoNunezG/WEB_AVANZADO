import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes
import { IndexComponent } from './components/index/index.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

const routes: Routes = [
  { path: '', component: IndexComponent }, 
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})
export class AppRoutingModule { }
