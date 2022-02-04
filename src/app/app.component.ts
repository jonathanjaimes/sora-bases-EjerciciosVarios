import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import data from "./superheroes/dataHeroes"
import datos from "./super/datos"
import { PruebaViewChildComponent } from './prueba-view-child/prueba-view-child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bases';

  @Input() dataHeroes:Array<any> = data

datosHeroes:Array<any> = datos


@ViewChild('referencia', { static:true}) referencia!: ElementRef

@ViewChild('referencia2') referencia2!: ElementRef

@ViewChild(PruebaViewChildComponent, {static: true}) hijo!:PruebaViewChildComponent

imprimirValor(){
  console.log(this.referencia.nativeElement.value)
}

ngOnInit() {
  console.log(this.referencia.nativeElement.value)
  console.log(this.hijo.variable)
}

}
