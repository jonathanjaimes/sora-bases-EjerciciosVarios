import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent {

  @Input() heroe:any

}
