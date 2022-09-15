import { Component, Input, OnInit } from '@angular/core';
import { GanadoresCategoria } from 'src/app/models/premiacionModel';

@Component({
  selector: 'app-premio-cat',
  templateUrl: './premio-cat.component.html',
  styleUrls: ['./premio-cat.component.css']
})
export class PremioCatComponent implements OnInit {

  @Input() projectList!: GanadoresCategoria[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.projectList);
    
  }

}
