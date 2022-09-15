import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from 'src/app/models/projectsmodel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  loading:boolean=true;
  @Input() projectItem!: Project;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
