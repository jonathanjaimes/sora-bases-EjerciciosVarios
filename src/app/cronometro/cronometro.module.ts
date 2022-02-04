import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronoComponent } from './crono/crono.component';



@NgModule({
  declarations: [
    CronoComponent
  ],
  imports: [
    CommonModule
  ],
  
  exports: [
    CronoComponent
    ]
  
})
export class CronometroModule { }
