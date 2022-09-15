import { Component, OnInit } from '@angular/core';
import { PremiacionService } from 'src/app/services/premiacion.service';

@Component({
  selector: 'app-premiacion',
  templateUrl: './premiacion.component.html',
  styleUrls: ['./premiacion.component.scss']
})
export class PremiacionComponent implements OnInit {

  loading=true;
  ErrorTecnico:number=0;
  Premios:any;
  constructor(private servicio:PremiacionService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.loading=true;
    this.servicio.getPremiacion().subscribe(data =>{
      this.Premios = data;
      console.log(this.Premios);
      this.loading=false; 
    },
    err=>{
      this.ErrorTecnico=err.status;this.loading=false
    },
    )
  }
 
}
