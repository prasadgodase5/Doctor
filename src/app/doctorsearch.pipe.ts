import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctorsearch'
})
export class DoctorsearchPipe implements PipeTransform {

  transform(value:any, searching:any): any {
    if(!searching) return value;

    searching=searching.toLowerCase();
    return value.filter((data:any) =>{
      return JSON.stringify(data).toLowerCase().includes(searching);
    })


  }

}
