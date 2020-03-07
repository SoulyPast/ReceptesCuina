import { Component, OnInit } from '@angular/core';
import { Receptes, RECEPTES} from '../receptes';


@Component({
  selector: 'app-llista-receptes',
  templateUrl: './llista-receptes.component.html',
  styleUrls: ['./llista-receptes.component.css']
})
export class LlistaReceptesComponent implements OnInit {
  //genero un id para cada recepte
  id = Date.now(); 
  //recept es el valor que utilizo en html para imprimir lo valores
  recept = RECEPTES;
  //declaro el objeto
  recepta:Receptes = new Receptes();
  constructor() {
  }
  
  crearRecepta(){
    //añadir una recepta nueva en mi objeto que esta en recept.ts
    this.recept.push(this.recepta);
    this.recepta = new Receptes();
    this.id = Date.now(); 
  }
 

  ngOnInit() {
    //jquery esto lo hecho para que no deja enviar el formulario null y que el button de enviar salga disabled.
    //combrobar si el usuario como minimo tiene dos campos con datos y activar el button de enviar.
    // no me ha dejado desctivar el button des de html utilizando ng-disabled porque no es compatible con ng modal ademas 
    //me estaba bloquendo los pipes de busqueda al final para evitar problemas lo hecho con jquey!!
    var count=0;
    $("#submit").prop('disabled', true);
    $('#nom').change(function(){
    count = count+1;
    if(count==2){
      $("#submit").prop('disabled', false);
    }
    });

    $('#ingere').change(function(){
      count = count+1;
      if(count==2){
        $("#submit").prop('disabled', false);
      }
      });

      $('#desc').change(function(){
        count = count+1;
        if(count==2){
          $("#submit").prop('disabled', false);
        }
        });


  }

}
