import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from 'src/app/models/projectsmodel';
import { RutasImg } from 'src/app/services/RutasImg';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  ImgRoute=RutasImg.RutaImgProyect
  loading:boolean=true;
  @Input() projectItem?: Project;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
