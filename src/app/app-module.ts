import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { Menu } from './components/menu/menu';
import { Departamentos } from './components/departamentos/departamentos';
import { FormsModule } from '@angular/forms';
import { DepartamentoService } from './services/departamento-service';
import { CrearDepartamento } from './components/crear-departamento/crear-departamento';
import { UpdateDepartamento } from './components/update-departamento/update-departamento';
import { Details } from './components/details/details';

@NgModule({
    declarations: [App, Menu, Departamentos, CrearDepartamento, UpdateDepartamento, Details],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), DepartamentoService],
    bootstrap: [App],
})
export class AppModule {}
