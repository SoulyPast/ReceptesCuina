import { Component, OnInit } from '@angular/core';
import { RECEPTES, COMENTARIS, Comentaris} from '../receptes';
import * as $ from 'jquery';

@Component({
  selector: 'app-receptes',
  templateUrl: './receptes.component.html',
  styleUrls: ['./receptes.component.css']
})
export class ReceptesComponent implements OnInit {
  // guarda la date de creacion del comentrario
   f = new Date();
   data = this.f.getDate() + "/" + ( this.f.getMonth() +1) + "/" +  this.f.getFullYear();

  //declarar los variables que hacen falta
  recept = RECEPTES;
  coment = COMENTARIS;

  selec='';
  buscadorReceptes ='';
  selector='';
  comenta:Comentaris = new Comentaris;
  constructor() { }
  //funcion crea comentario
  crearComentari(){
    this.comenta.date=this.data;
    this.coment.push(this.comenta);
    this.comenta = new Comentaris;
    
  }
 
  // la funcion de ordena 
  onChange(deviceValue){
    this.selec=deviceValue;
  }
  ngOnInit(): void {
    //selecionar un valor por defecto para cada select que tengo en html
    this.selector = "Tria una opció";
    this.comenta.num_estrelles= 5;
  
  }

}
