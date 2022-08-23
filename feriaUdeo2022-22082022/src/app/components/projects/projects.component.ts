import { Component, Input, OnInit } from '@angular/core';
import { InfoProjectsService } from 'src/app/services/info-projects.service';
import { Project } from 'src/app/models/project';
import { projectUrl } from 'src/app/config/api';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList: Project[] = [];

  constructor(
    private servicio: InfoProjectsService) {
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.servicio.getProjects().subscribe((projects) => {
      this.projectList = projects;
      console.log(projects);
    })
  }
}
