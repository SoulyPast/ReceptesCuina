import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selector',
  pure: false
})
export class SelectorPipe implements PipeTransform {

  transform(values: any, args?: string): any {

    if(args.includes('Ascendent')){
      values.sort(function(a, b){
        var nameA=a.nom_recepta, nameB=b.nom_recepta;
        if (nameA < nameB) //sort string ascending
         return -1;
        if (nameA > nameB)
         return 1;
        return 0; //default return value (no sorting)
       });
    }
    else if(args.includes('Descendent')){
      values.sort(function(a, b){
        var nameA=a.nom_recepta, nameB=b.nom_recepta;
        if (nameA < nameB) //sort string descending
         return 1;
        if (nameA > nameB)
         return -1;
        return 0; //default return value (no sorting)
       });
    }

    else if(args.includes('IAscendent')){
      values.sort(function(a, b){
        var nameA=a.ingredients, nameB=b.ingredients;
        if (nameA < nameB) //sort string ascending
         return -1;
        if (nameA > nameB)
         return 1;
        return 0; //default return value (no sorting)
       });
    }
    
    else if(args.includes('IDescendent')){
      values.sort(function(a, b){
        var nameA=a.ingredients, nameB=b.ingredients;
        if (nameA < nameB) //sort string descending
         return 1;
        if (nameA > nameB)
         return -1;
        return 0; //default return value (no sorting)
       });
    }

    return values;
  }

}
