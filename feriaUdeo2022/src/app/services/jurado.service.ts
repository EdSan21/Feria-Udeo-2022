import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jurado, JuradoPage } from '../models/juradomodels';
import { Rutas } from './RutasApi';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  constructor(public http: HttpClient) { 
  }

  getJurado(): Observable<JuradoPage[]> {
    return this.http.get<JuradoPage[]>(Rutas.RutaDatos+"Jurado");
  }
}
