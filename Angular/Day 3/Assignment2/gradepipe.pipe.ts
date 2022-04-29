import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradepipe'
})
export class GradepipePipe implements PipeTransform {

  transform(input:number):string  {

    let output:string="";
    switch(input){
    case 1:
      output="Excellent"
      break;
      case 2:
        output="Good"
      break;
      case 3:
        output="Average"
      break;
      case 4:
        output="Poor"
      break;
      case 5:
        output="Bad"
      break;
    }
    return output;
  }

}
