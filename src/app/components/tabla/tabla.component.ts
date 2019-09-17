import { Component } from "@angular/core";

@Component({
    selector: 'tabla',
    templateUrl: './tabla.Component.html',
})
export class tabla{
    clientes:string[]=["Paola Perez", "Pedro Garcia", 
    "María Velez", "Raúl Gonzales"];


    clientesTienda:Object[] = [{nombre:"Paola", apellido:"Perez"},
                                {nombre:"Pedro", apellido:"Garcia"},
                                {nombre:"maria", apellido:"Velez"}]
}