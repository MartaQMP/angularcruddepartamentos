import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';
import { environment } from '../../environments/environment.development';

@Injectable()
export class DepartamentoService {
    constructor(private _http: HttpClient) {}

    getDepartamentos(): Observable<Array<Departamento>> {
        let request = 'api/departamentos';
        return this._http.get<Array<Departamento>>(environment.urlDepartamentos + request);
    }

    getDepartamentoId(numero: number): Observable<Departamento> {
        let request = 'api/departamentos/' + numero;
        return this._http.get<Departamento>(environment.urlDepartamentos + request);
    }

    crearDepartamento(departamento: Departamento): Observable<any> {
        let request = 'api/departamentos';
        let dataJson = JSON.stringify(departamento);
        //CREAMOS LA CABECERA
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(environment.urlDepartamentos + request, dataJson, {
            headers: header,
        });
    }

    updateDepartamento(departamento: Departamento): Observable<any> {
        let request = 'api/departamentos';
        let dataJson = JSON.stringify(departamento);
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(environment.urlDepartamentos + request, dataJson, {
            headers: header,
        });
    }

    deleteDepartamento(numero: number): Observable<any> {
        let request = 'api/departamentos/' + numero;
        return this._http.delete(environment.urlDepartamentos + request);
    }
}
