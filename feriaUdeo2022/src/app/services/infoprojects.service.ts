import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/projectsmodel';

const apiUrl = 'http://localhost:3000/projects';

@Injectable({
  providedIn: 'root'
})
export class InfoProjectsService {

  constructor(public http: HttpClient) { 
    this.getProjects();
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(apiUrl);
  }
}

