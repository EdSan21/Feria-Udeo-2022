import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { JuradoComponent } from './components/jurado/jurado.component';
import { LoginComponent } from './components/login/login.component';
import { PremiacionComponent } from './components/premiacion/premiacion.component';
import { DetailsComponent } from './components/projects/details/details.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'details', component: DetailsComponent},
  { path: 'jurado', component: JuradoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'premiacion', component: PremiacionComponent },
  { path: "**", pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: "enabled", anchorScrolling: "enabled" })], //TODO # HASH & RESET BOTH SCROLL BARS 
  exports: [RouterModule]  //EXPORTAMOS LAS RUTAS PARA PODERLAS USAR
})
export class AppRoutingModule { }
