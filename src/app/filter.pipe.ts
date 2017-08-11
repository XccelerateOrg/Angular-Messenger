import { Pipe, PipeTransform } from '@angular/core';
import { Message } from './message.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(messages: any, term: any): any {
    if(term == '') return messages;

    return messages.filter(message => message.content.toLowerCase().includes(term.toLowerCase()))
  }

}
