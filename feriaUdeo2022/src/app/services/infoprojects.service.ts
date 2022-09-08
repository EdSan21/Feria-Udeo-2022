import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project, Projectpage } from '../models/projectsmodel';
import { Rutas } from './RutasApi';

const apiUrl = 'https://localhost:7230/api/';

@Injectable({
  providedIn: 'root'
})
export class InfoProjectsService {

  constructor(public http: HttpClient) { 
    this.getProjects();
  }

  getProjects(): Observable<Projectpage> {
    return this.http.get<Projectpage>(Rutas.RutaDatos+"Proyects");
  }

  showDetails(id: string): Observable<Project>{
    return this.http.get<Project>(apiUrl+"Proyects/"+id)
  }
}

