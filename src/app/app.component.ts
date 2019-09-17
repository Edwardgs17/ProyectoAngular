import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  clientes:string[]=["Paola Perez", "Pedro Garcia", 
                    "María Velez", "Raúl Gonzales"];
  
  estado:boolean = false;
  //estado = !estado
  cambiar(){
    console.log("23")
    this.estado = !this.estado;
  }
}
