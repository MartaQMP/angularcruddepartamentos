import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Departamentos } from './components/departamentos/departamentos';
import { CrearDepartamento } from './components/crear-departamento/crear-departamento';
import { Details } from './components/details/details';
import { UpdateDepartamento } from './components/update-departamento/update-departamento';

const routes: Routes = [
  { path: '', component: Departamentos },
  { path: 'crear', component: CrearDepartamento },
  { path: 'update/:numero', component: UpdateDepartamento },
  { path: 'details/:numero', component: Details },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
