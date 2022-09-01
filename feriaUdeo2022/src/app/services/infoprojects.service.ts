import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project, Projectpage } from '../models/projectsmodel';

const apiUrl = 'https://localhost:44376/api/';

@Injectable({
  providedIn: 'root'
})
export class InfoProjectsService {

  constructor(public http: HttpClient) { 
    this.getProjects();
  }

  getProjects(): Observable<Projectpage> {
    return this.http.get<Projectpage>(apiUrl+"Proyects");
  }
}

