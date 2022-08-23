import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SafePipeModule } from 'safe-pipe';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { JuradoComponent } from './components/jurado/jurado.component';
import { CartasComponent } from './components/holders/cartas/cartas.component';
import { TarjetasComponent } from './components/holders/tarjetas/tarjetas.component';
import { CarouselComponent } from './components/holders/carousel/carousel.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PremiacionComponent } from './components/premiacion/premiacion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    JuradoComponent,
    CartasComponent,
    TarjetasComponent,
    CarouselComponent,
    PremiacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    SafePipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
