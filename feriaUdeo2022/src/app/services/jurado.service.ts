import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jurado } from '../models/juradomodels';

const apiUrl = 'http://localhost:3000/jurado';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  constructor(public http: HttpClient) { 
    this.getJurado();
  }

  getJurado(): Observable<Jurado[]> {
    return this.http.get<Jurado[]>(apiUrl);
  }
}
