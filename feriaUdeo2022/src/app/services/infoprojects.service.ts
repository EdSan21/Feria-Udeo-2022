import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project, Projectpage } from '../models/projectsmodel';
import { Rutas } from './RutasApi';


@Injectable({
  providedIn: 'root'
})
export class InfoProjectsService {

  constructor(public http: HttpClient) { 
  }

  getProjects(): Observable<Projectpage> {
    return this.http.get<Projectpage>(Rutas.RutaDatos+"Proyects");
  }

  showDetails(id: string): Observable<Project>{
    return this.http.get<Project>(Rutas.RutaDatos+"Proyects/"+id)
  }
  showDetailsLogged(id: string, IdSession:string, sessionUser:string): Observable<Project>{
    var sessionId = parseInt(IdSession)
    return this.http.post<Project>(Rutas.RutaDatos+"Proyects/lg/"+id,{sessionId,sessionUser})
  }

  RegistrarVoto(idProyect: any, idUser:string, usuario:string,puntuacion:any): Observable<string>{
    var idProyecto= parseInt(idProyect)
    var idUsuario = parseInt(idUser)
    var voto = parseInt(puntuacion)
    console.log({idProyecto,idUsuario,usuario,voto});
    
    return this.http.put<string>(Rutas.RutaVotos+"Votos",{idProyecto,idUsuario,usuario,voto});
  }

}

