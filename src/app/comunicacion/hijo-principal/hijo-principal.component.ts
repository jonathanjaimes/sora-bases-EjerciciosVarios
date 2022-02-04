import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo-principal',
  templateUrl: './hijo-principal.component.html',
  styleUrls: ['./hijo-principal.component.css']
})
export class HijoPrincipalComponent {

  @Input() variable:string = "azul";

}
