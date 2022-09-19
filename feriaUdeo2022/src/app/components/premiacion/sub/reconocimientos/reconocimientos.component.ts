import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Project } from 'src/app/models/projectsmodel';

@Component({
  selector: 'app-reconocimientos',
  templateUrl: './reconocimientos.component.html',
  styleUrls: ['./reconocimientos.component.css']
})
export class ReconocimientosComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollComponent})
  ds!:DragScrollComponent;
  
  constructor() { }
  @Input() projectList!: Project[];
  ngOnInit(): void {
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

}
