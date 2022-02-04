import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent  {

  numero:number = 0;

  acumular (bandera:boolean = true){
    if(bandera){
      this.numero +=1;
    }else {
      this.numero -=1;
    }
  }
  
  band:boolean = false;

  validacion () {
    this.band = !this.band

    }
  }
