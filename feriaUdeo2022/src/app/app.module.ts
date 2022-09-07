import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
import { PodioComponent } from './components/premiacion/sub/podio/podio.component';
import { ReconocimientosComponent } from './components/premiacion/sub/reconocimientos/reconocimientos.component';
import { PremioCatComponent } from './components/premiacion/sub/premio-cat/premio-cat.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DetailsComponent } from './components/projects/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ProjectComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    JuradoComponent,
    CartasComponent,
    TarjetasComponent,
    CarouselComponent,
    PremiacionComponent,
    PodioComponent,
    ReconocimientosComponent,
    PremioCatComponent,
    
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
