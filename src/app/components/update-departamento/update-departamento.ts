import { Component, ElementRef, ViewChild } from '@angular/core';
import { DepartamentoService } from '../../services/departamento-service';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';

@Component({
    selector: 'app-update-departamento',
    standalone: false,
    templateUrl: './update-departamento.html',
    styleUrl: './update-departamento.css',
})
export class UpdateDepartamento {
    @ViewChild('cajaId') cajaId!: ElementRef;
    @ViewChild('cajaNombre') cajaNombre!: ElementRef;
    @ViewChild('cajaLocalidad') cajaLocalidad!: ElementRef;

    constructor(private _service: DepartamentoService, private _router: Router) {}
    modificarDepartamento() {
        let num = parseInt(this.cajaId.nativeElement.value);
        let nom = this.cajaNombre.nativeElement.value;
        let loc = this.cajaLocalidad.nativeElement.value;

        let departamento: Departamento = { numero: num, nombre: nom, localidad: loc };

        this._service.updateDepartamento(departamento).subscribe(() => this._router.navigate(['/']));
    }
}
