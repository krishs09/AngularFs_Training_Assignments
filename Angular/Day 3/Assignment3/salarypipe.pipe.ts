import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salarypipe'
})
export class SalarypipePipe implements PipeTransform {

  transform(input:any[],key:string,min:number,max:number):any[] {
    return input.filter(item=>item[key]>=min && item[key] <=max);
  }

}
