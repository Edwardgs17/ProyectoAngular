import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {

  estado:boolean=false;

  cambiarEstado(){
    if (this.estado==false) {
      this.estado=true;
    } else {
      this.estado=false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
