import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { session } from '../models/Sessionmodel';
import { HttpClient } from '@angular/common/http';
import { Rutas } from './RutasApi';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

  constructor( public http: HttpClient) { 
    
  }

  Login(User:string, Password:string):Observable<session> {

    return this.http.post<session>(Rutas.RutaDatos+"Login", {User,Password});

  }


  
}
