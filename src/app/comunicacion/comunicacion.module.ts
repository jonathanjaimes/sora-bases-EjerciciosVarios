import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincomComponent } from './princom/princom.component';
import { HijoPrincipalComponent } from './hijo-principal/hijo-principal.component';



@NgModule({
  declarations: [
    PrincomComponent,
    HijoPrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrincomComponent
  ]
})
export class ComunicacionModule { }
