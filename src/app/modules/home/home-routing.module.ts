import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    /** Raiz del modulo padre que haya llamado a home.module.ts
    *   OJO: en este caso, cargamos home.module desde la ruta /home
    *   por lo que nuestro directorio raiz aquí, es "/home"
    */
    path:'', // localhost:4200/<raiz del modulo padre>
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
