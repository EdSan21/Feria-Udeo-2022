import { Component, Input, OnInit } from '@angular/core';
import { InfoProjectsService } from 'src/app/services/info-projects.service';
import { Project } from 'src/app/models/project';
import { projectUrl } from 'src/app/config/api';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() projectItem!: Project;

  constructor() {
  }

  ngOnInit(): void {
  }

}
