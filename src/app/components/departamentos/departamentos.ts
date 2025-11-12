import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { DepartamentoService } from '../../services/departamento-service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-departamentos',
    standalone: false,
    templateUrl: './departamentos.html',
    styleUrl: './departamentos.css',
})
export class Departamentos implements OnInit {
    public departamentos!: Array<Departamento>;

    constructor(private _service: DepartamentoService, private _router: Router) {}
    ngOnInit(): void {
        this._service.getDepartamentos().subscribe((response) => (this.departamentos = response));
    }

    borrarDepartamento(numero: number): void {
        Swal.fire({
            title: 'Estas seguro?',
            text: 'No lo podras revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borralo!',
        }).then((result) => {
            if (result.isConfirmed) {
                this._service.deleteDepartamento(numero).subscribe(() => {
                    this._service
                        .getDepartamentos()
                        .subscribe((response) => (this.departamentos = response));
                });
                Swal.fire({
                    title: 'Borrado!',
                    text: 'Tu departamento ha sido borrado',
                    icon: 'success',
                });
            }
        });
    }
}
