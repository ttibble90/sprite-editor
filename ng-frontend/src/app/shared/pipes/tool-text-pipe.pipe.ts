import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toolTextPipe'
})
export class ToolTextPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
