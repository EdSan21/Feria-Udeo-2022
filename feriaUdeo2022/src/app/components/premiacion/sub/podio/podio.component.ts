import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podio',
  templateUrl: './podio.component.html',
  styleUrls: ['./podio.component.scss']
})
export class PodioComponent implements OnInit {

  

  Podio: any[3] = new Array(3);


  constructor() {

    this.Podio[0] = {
      Titulo: "Circuito de carreras volador automatizado ecologico",
      Categoria:"Mecatronica",
      Imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nao_Robot_%28Robocup_2016%29.jpg/800px-Nao_Robot_%28Robocup_2016%29.jpg"
    } 
    this.Podio[1] = {
      Titulo: "Circuito digital",
      Categoria:"Programacion",
      Imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nao_Robot_%28Robocup_2016%29.jpg/800px-Nao_Robot_%28Robocup_2016%29.jpg"
    } 
    this.Podio[2] = {
      Titulo: "Maquina de Goldenberg",
      Categoria:"Unica",
      Imagen:"https://m.media-amazon.com/images/I/71g1TNP7JXL._AC_SX425_.jpg"
    } 

    console.log(this.Podio)
    
    
   }

  ngOnInit(): void {
    
    
  }

}
