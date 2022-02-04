import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CronometroModule} from "../app/cronometro/cronometro.module"
import {HeroesModule} from "../app/heroes/heroes.module"
import { DragonModule } from './dragon/dragon.module';
import { ComunicacionModule } from './comunicacion/comunicacion.module';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { SuperComponent } from './super/super.component';
import { PruebaViewChildComponent } from './prueba-view-child/prueba-view-child.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
    SuperComponent,
    PruebaViewChildComponent
  ],
  imports: [
    BrowserModule,
    CronometroModule,
    HeroesModule,
    DragonModule,
    ComunicacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
