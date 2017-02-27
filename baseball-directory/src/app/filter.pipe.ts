import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any, term: any): any {

    if (term == undefined || term.length == 0) {
      return items;
    }

    return items.filter( item => item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }

}
