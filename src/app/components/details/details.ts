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
export class Details implements OnInit{
    public departamento!: Departamento

    constructor(private _service:DepartamentoService, private _router: Router, private _parametro:ActivatedRoute){}
  ngOnInit(): void {
    let numero = this._parametro.params.subscribe((parametro: Params) => {

    })
    this._service.getDepartamentoId()
  }

    
}
