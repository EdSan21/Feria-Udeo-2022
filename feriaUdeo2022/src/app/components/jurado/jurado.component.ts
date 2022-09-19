import { Component, OnInit } from '@angular/core';
import { JuradoPage } from 'src/app/models/juradomodels';
import { JuradoService } from 'src/app/services/jurado.service';
import { RutasImg } from 'src/app/services/RutasImg';

@Component({
  selector: 'app-jurado',
  templateUrl: './jurado.component.html',
  styleUrls: ['./jurado.component.scss']
})
export class JuradoComponent implements OnInit {

  ImgRoute:string=RutasImg.RutaImgJurado;
  juradoList: JuradoPage[] = [];
  loading = true;
  ErrorTecnico=false;

  constructor(private juradoService: JuradoService) { }

  ngOnInit(): void {
    try {
      this.juradoService.getJurado().
      subscribe((jurado)=>{
      this.juradoList=jurado;
      console .log(jurado);
      this.loading=false;
    },
    err=>{this.ErrorTecnico=true;this.loading=false},
    ()=>console.log('Cargado')
    
    );
    } catch (error) {
      this.loading=false;
    }
    
        
  }

}
