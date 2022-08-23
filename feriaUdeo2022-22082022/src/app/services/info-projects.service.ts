import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectInterface } from 'src/app/interface/project.interface';
import { projectUrl } from '../config/api';

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
