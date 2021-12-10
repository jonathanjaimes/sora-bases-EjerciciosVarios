import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeroeComponent,
    ListadoComponent
  ]
})
export class HeroesModule { }
