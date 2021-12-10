import { Component, Input } from '@angular/core';
import data from "./superheroes/dataHeroes"
import datos from "./super/datos"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';

  @Input() dataHeroes:Array<any> = data

datosHeroes:Array<any> = datos

}
