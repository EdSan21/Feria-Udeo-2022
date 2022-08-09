import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: "**", pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], //TODO # HASH
  exports: [RouterModule]  //EXPORTAMOS LAS RUTAS PARA PODERLAS USAR
})
export class AppRoutingModule { }
