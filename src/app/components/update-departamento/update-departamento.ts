import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DepartamentoService } from '../../services/departamento-service';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-update-departamento',
    standalone: false,
    templateUrl: './update-departamento.html',
    styleUrl: './update-departamento.css',
})
export class UpdateDepartamento implements OnInit {
    public numero!: number;
    @ViewChild('cajaId') cajaId!: ElementRef;
    @ViewChild('cajaNombre') cajaNombre!: ElementRef;
    @ViewChild('cajaLocalidad') cajaLocalidad!: ElementRef;
    public departamento!: Departamento;

    constructor(
        private _service: DepartamentoService,
        private _router: Router,
        private _parametro: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this._parametro.params.subscribe((parametros: Params) => {
            if (parametros['numero'] != null) {
                this.numero = parseInt(parametros['numero']);
            }
        });
        this._service
            .getDepartamentoId(this.numero)
            .subscribe((response) => (this.departamento = response));
}

    modificarDepartamento() {
        let nom = this.cajaNombre.nativeElement.value;
        let loc = this.cajaLocalidad.nativeElement.value;

        let departamento: Departamento = { numero: this.numero, nombre: nom, localidad: loc };

        this._service
            .updateDepartamento(departamento)
            .subscribe(() => this._router.navigate(['/']));
    }
}
