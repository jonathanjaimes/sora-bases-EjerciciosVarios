import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-view-child',
  templateUrl: './prueba-view-child.component.html',
  styleUrls: ['./prueba-view-child.component.css']
})
export class PruebaViewChildComponent implements OnInit {

  constructor() { }

  variable:string = "hola mundo"

  ngOnInit(): void {
  }

}
