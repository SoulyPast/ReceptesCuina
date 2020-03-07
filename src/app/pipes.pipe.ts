import { Pipe, PipeTransform } from '@angular/core';
import { RECEPTES } from './receptes';

@Pipe({
  name: 'pipes',
  pure: false
})
export class PipesPipe implements PipeTransform {
  recept = RECEPTES;
  
  transform(value: any, arg: any): any {
    const resultatBuscar = [];
    for(const rec of value){
      
      if(rec.nom_recepta.indexOf(arg) > -1){
        resultatBuscar.push(rec);
      };
    };

    return resultatBuscar;
  }
}
