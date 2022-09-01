import { Component, OnInit } from '@angular/core';
import { JuradoPage } from 'src/app/models/juradomodels';
import { JuradoService } from 'src/app/services/jurado.service';

@Component({
  selector: 'app-jurado',
  templateUrl: './jurado.component.html',
  styleUrls: ['./jurado.component.scss']
})
export class JuradoComponent implements OnInit {

  juradoList: JuradoPage[] = []
  loading = true;

  constructor(private juradoService: JuradoService) { }

  ngOnInit(): void {
    this.juradoService.getJurado().
    subscribe((jurado)=>{
      this.juradoList=jurado;
      console .log(jurado);
      this.loading=false;
    });
    
        
  }

}
