import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  dragonesAgregados:any[] = [];

  nombre:string = "";
  poder:number = 0;

  enviarDatos (nombre:string, poder:number) {
    //console.log(nombre);
    //console.log(poder);
    this.nombre = nombre;
    this.poder = poder;

    const dragon = {
      nombre: this.nombre,
      poder: this.poder
    }

    this.dragonesAgregados.push(dragon)

    console.log(this.dragonesAgregados)

  }

  limpiarDragonesAgregados () {
    this.dragonesAgregados= [];
    
  }

}
