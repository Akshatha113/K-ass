import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val:any) => {
      let rVal = (val.description.toLocaleLowerCase().includes(args)) || (val.name.toLocaleLowerCase().includes(args)) ||  (val.webReference.toLocaleLowerCase().includes(args))
      return rVal;
    })
  }
}