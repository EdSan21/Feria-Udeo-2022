import { Component, Input, OnInit } from '@angular/core';
import { podioModel } from 'src/app/models/premiacionModel';

@Component({
  selector: 'app-podio',
  templateUrl: './podio.component.html',
  styleUrls: ['./podio.component.scss']
})
export class PodioComponent implements OnInit {

  @Input() PrimerLugar!: podioModel;
  @Input() SegundoLugar!: podioModel;
  @Input() TercerLugar!: podioModel;
  constructor() {

   }

  ngOnInit(): void {
    console.log(this.PrimerLugar);
    
  }

}
