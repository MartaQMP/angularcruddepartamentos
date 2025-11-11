import { Component, ElementRef, ViewChild } from '@angular/core';
import { DepartamentoService } from '../../services/departamento-service';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crear-departamento',
    standalone: false,
    templateUrl: './crear-departamento.html',
    styleUrl: './crear-departamento.css',
})
export class CrearDepartamento {
    @ViewChild('cajaId') cajaId!: ElementRef;
    @ViewChild('cajaNombre') cajaNombre!: ElementRef;
    @ViewChild('cajaLocalidad') cajaLocalidad!: ElementRef;

    constructor(private _service: DepartamentoService, private _router: Router) {}
    crearDepartamento() {
        let num = parseInt(this.cajaId.nativeElement.value);
        let nom = this.cajaNombre.nativeElement.value;
        let loc = this.cajaLocalidad.nativeElement.value;

        let departamento: Departamento = { numero: num, nombre: nom, localidad: loc };

        this._service.crearDepartamento(departamento).subscribe(() => this._router.navigate(['/']));
    }
}
