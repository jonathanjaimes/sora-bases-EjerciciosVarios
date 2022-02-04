import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  ciudades:string[] = ["Cúcuta", "Neiva", "Bogotá", "Medellín"]

  cBorradas:string[] = []


  eliminar (item:string) {
    let i = this.ciudades.indexOf( item );
    i !== -1 && this.ciudades.splice( i, 1 );
  }

  val:number = -1

  enviarForm (valores:number) {

    console.log(typeof(valores))

    console.log(valores)

    console.log(this.ciudades[valores-1])

    this.cBorradas.push(this.ciudades[valores-1])

    valores !== -1 && this.ciudades.splice( valores-1, 1 );

  }
    
};
