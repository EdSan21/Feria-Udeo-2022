import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbAlert, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { InfoProjectsService } from 'src/app/services/infoprojects.service';
import { RutasImg } from 'src/app/services/RutasImg';

interface Alert {
  type: string;
  message: string;
}

const AlertCreated: Alert[] = [{
  type: 'success',
  message: 'Voto añadido',
}];
const Alert0: Alert[] = [{
  type: 'danger',
  message: 'No se ha podido conectar con el servidor, intente más tarde',
}];
const Alert500: Alert[] = [{
  type: 'danger',
  message: 'Ha ocurrido un problema con el servidor, intente más tarde',
}];
const Alert401: Alert[] = [{
  type: 'info',
  message: 'Las votaciones han terminado',
}];


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ImgRouteP=RutasImg.RutaImgProyect
  ImgRouteE=RutasImg.RutaImgEstudiante
  ImgRouteJ=RutasImg.RutaImgJurado
  id: any;
  proyecto:any;
  loadingDetails=true;
  Session:boolean=false;
  initialRate:number=0;
  alerts?: Alert[];
  ErrorTecnico=false;
  

  currentRate = new FormControl<number | null>(null, [Validators.required,
    (c) => {
    if (c.value === this.initialRate) {
      return { wrong: true };
    }
    return null;
  }]);

  constructor(
    private route:ActivatedRoute,
    private servicio:InfoProjectsService,
    public sanitizer: DomSanitizer,
    public config: NgbRatingConfig,
  ) { 
    config.max = 5;
  }
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    if (sessionStorage.getItem('Usuario')==null || sessionStorage.getItem('Id')==null) {
      this.Session=false
      this.showDetails();
    }else{
      if (sessionStorage.getItem('Usuario')=='null' || sessionStorage.getItem('Id')=='null') {
        this.Session=false;
      }else{
        this.Session=true;
        this.showDetailsLogged();
      }
    }

    
  }

  showDetails(){
    this.loadingDetails=true;
    this.servicio.showDetails(this.id).subscribe(proyecto =>{
      this.proyecto = proyecto;
      console.log(this.proyecto);
      this.loadingDetails=false; 
    },
    err=>{this.ErrorTecnico=true;this.loadingDetails=false},
    ()=>console.log('Cargado'))
  }
  showDetailsLogged(){
    this.loadingDetails=true;
    this.servicio.showDetailsLogged(this.id,sessionStorage.getItem('Id')!,sessionStorage.getItem('Usuario')!).subscribe(proyecto =>{
      this.proyecto = proyecto;
      console.log(this.proyecto);
      this.currentRate.setValue(this.proyecto.voto);
      this.initialRate=this.proyecto.voto;
      if (this.proyecto.votacion==false) {
        this.currentRate.disable();
      }
      this.loadingDetails=false; 
      
      
    },
    err=>{this.ErrorTecnico=true;this.loadingDetails=false},
    ()=>console.log('Cargado'))
  }

  EnviarVoto() {

    
    this.currentRate.disable();
    try {
      this.servicio.RegistrarVoto(this.id,sessionStorage.getItem('Id')!,sessionStorage.getItem('Usuario')!,this.currentRate.value!)
    .subscribe((mensaje)=>{
      console.log("suscrito")
      this.alerts = Array.from(AlertCreated);
      setTimeout(() => this.selfClosingAlert.close(), 7000);


    },
    err=>{
    
      switch (err.status) {
        case 404:
          this.CerrarSession();
          break;
        case 500:
          this.alerts = Array.from(Alert500);
          setTimeout(() => this.selfClosingAlert.close(), 7000);
          break;
        case 401:
          this.alerts = Array.from(Alert401);
          setTimeout(() => this.selfClosingAlert.close(), 7000);
          break;
        default:
          this.alerts = Array.from(Alert0);
          setTimeout(() => this.selfClosingAlert.close(), 7000);
          break;
      }


      this.currentRate.enable();
    },
    ()=>{
      console.log("exito")
      this.initialRate=this.currentRate.value!
      this.currentRate.updateValueAndValidity()
      this.currentRate.enable();
    }
    )

    
      
    } catch (error) {
      console.log(error);
      
      this.currentRate.enable();
    }
    
  }

  close(alert : Alert) {
    this.alerts?.splice(this.alerts.indexOf(alert), 1);
  }

  CerrarSession(){
    this.ClearSession();
    window.location.reload();
  }

  ClearSession(){
    sessionStorage.removeItem('Usuario');
    sessionStorage.removeItem('Id');
    sessionStorage.removeItem('Imagen');
    sessionStorage.removeItem('Nombre');
  }
}
