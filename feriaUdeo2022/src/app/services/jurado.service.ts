import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jurado, JuradoPage } from '../models/juradomodels';

const apiUrl = 'https://localhost:44376/api/';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  constructor(public http: HttpClient) { 
    this.getJurado();
  }

  getJurado(): Observable<JuradoPage[]> {
    return this.http.get<JuradoPage[]>(apiUrl+"Jurado");
  }
}
