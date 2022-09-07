import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { InfoProjectsService } from 'src/app/services/infoprojects.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  proyecto:any;
  loadingDetails=true;

  constructor(
    private route:ActivatedRoute,
    private servicio:InfoProjectsService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.showDetails();
  }

  showDetails(){
    this.loadingDetails=true;
    this.servicio.showDetails(this.id).subscribe(proyecto =>{
      this.proyecto = proyecto;
      console.log(this.proyecto);
      this.loadingDetails=false; 
    })
  }
}
