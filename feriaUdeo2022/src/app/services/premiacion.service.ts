import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rutas } from './RutasApi';
import { PremiacionModel } from '../models/premiacionModel';
import { JuradoPage } from '../models/juradomodels';
@Injectable({
  providedIn: 'root'
})
export class PremiacionService {

  constructor(public http: HttpClient) { }

  getPremiacion(): Observable<PremiacionModel> {
    return this.http.get<PremiacionModel>(Rutas.RutaDatos+"Premiacion");
  }
}
