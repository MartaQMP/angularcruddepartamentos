import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { DepartamentoService } from '../../services/departamento-service';

@Component({
    selector: 'app-departamentos',
    standalone: false,
    templateUrl: './departamentos.html',
    styleUrl: './departamentos.css',
})
export class Departamentos implements OnInit {
    public departamentos!: Array<Departamento>;

    constructor(private _service: DepartamentoService) {}
    ngOnInit(): void {
        this._service.getDepartamentos().subscribe((response) => (this.departamentos = response));
    }
}
