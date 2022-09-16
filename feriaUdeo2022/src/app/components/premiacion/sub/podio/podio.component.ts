import { Component, Input, OnInit } from '@angular/core';
import { podioModel } from 'src/app/models/premiacionModel';
import { RutasImg } from 'src/app/services/RutasImg';

@Component({
  selector: 'app-podio',
  templateUrl: './podio.component.html',
  styleUrls: ['./podio.component.scss']
})
export class PodioComponent implements OnInit {
  ImgRoute=RutasImg.RutaImgProyect
  @Input() PrimerLugar!: podioModel;
  @Input() SegundoLugar!: podioModel;
  @Input() TercerLugar!: podioModel;
  constructor() {

   }

  ngOnInit(): void {
    console.log(this.PrimerLugar);
    
  }

}
