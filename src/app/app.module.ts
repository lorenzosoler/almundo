import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FiltroComponent } from './filtro/filtro.component';
import { ListaHotelesComponent } from './lista-hoteles/lista-hoteles.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';



@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent,
    ListaHotelesComponent,
    CardHotelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
