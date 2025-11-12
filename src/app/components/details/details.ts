import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { DepartamentoService } from '../../services/departamento-service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-details',
    standalone: false,
    templateUrl: './details.html',
    styleUrl: './details.css',
})
export class Details implements OnInit {
    public departamento!: Departamento;
    public numero!: number;

    constructor(
        private _service: DepartamentoService,
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
}
