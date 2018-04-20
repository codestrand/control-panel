import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/user.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], args?: { query: string }): any {
    if (!args.query) {
      return value;
    }
    return value.filter((i: User) => {
      const first = i.FirstName.toUpperCase().includes(args.query.toUpperCase());
      const last = i.LastName.toUpperCase().includes(args.query.toUpperCase());

      return first || last;

    });
  }
}
