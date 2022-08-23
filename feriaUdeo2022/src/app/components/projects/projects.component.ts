import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { timeout } from 'rxjs';
import { Project } from 'src/app/models/projectsmodel';
import { InfoProjectsService } from 'src/app/services/infoprojects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList: Project[] = [];
  loading = true;

  constructor(
    private servicio: InfoProjectsService,
    public sanitizer: DomSanitizer) {}


  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.servicio.getProjects().subscribe((projects) => {
      this.projectList = projects;
      console.log(projects);
      this.loading=false
    })
  }
}
