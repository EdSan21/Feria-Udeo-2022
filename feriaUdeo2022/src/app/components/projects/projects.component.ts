import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { timeout } from 'rxjs';
import { Project, Projectpage } from 'src/app/models/projectsmodel';
import { InfoProjectsService } from 'src/app/services/infoprojects.service';
import {NgbOffcanvas, OffcanvasDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DragScrollComponent } from 'ngx-drag-scroll';





@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollComponent})
  ds!:DragScrollComponent;

  projectList?: Projectpage;
  FilterProyects?:Project[];
  loading = true;
  ErrorTecnico=false;
  closeResult = '';

  constructor(
    private servicio: InfoProjectsService,
    public sanitizer: DomSanitizer,
    private offcanvasService: NgbOffcanvas) {}


  

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.servicio.getProjects().subscribe((projects) => {
      this.projectList = projects;
      this.FilterProyects=this.projectList.proyectos;
      this.loading=false;
      console.log(this.projectList)
    },
    err=>{this.ErrorTecnico=true;this.loading=false},
    ()=>console.log('Cargado')
    )
  }

  deseleccionar(){
    this.FilterProyects=this.projectList?.proyectos;
  }

  seleccionar(idCategoria:number){
    this.FilterProyects=this.projectList?.proyectos.filter(x=> x.idcategoria==idCategoria);
    console.log(this.projectList?.proyectos.filter(x=> x.idcategoria==idCategoria));
  }


  open(content: any) {
    this.offcanvasService.open(content, {ariaLabelledBy: 'offcanvas-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  
  
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

}


