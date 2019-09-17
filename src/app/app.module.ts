import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes}from '@angular/router';
//servicios
import { EquipoService }  from './equipo.service';

import { AppComponent } from './app.component';
import { tabla } from './components/tabla/tabla.component';
import { nav } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { ComprarTiquetesComponent } from './components/comprar-tiquetes/comprar-tiquetes.component';



const routes: Routes = [
   
      { path: '', component: CardsComponent, pathMatch: 'full' },
      { path: 'comprartiquetes', component: ComprarTiquetesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    tabla,
    nav,
    FooterComponent,
    CardsComponent,
    ComprarTiquetesComponent,
  ],
  imports: [
    BrowserModule,
   [ RouterModule.forRoot(routes) ]
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
