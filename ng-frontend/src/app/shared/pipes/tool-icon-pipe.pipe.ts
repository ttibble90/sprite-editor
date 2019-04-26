import { Pipe, PipeTransform } from '@angular/core';
import {ToolType} from "../classes/paint-tool";

@Pipe({
  name: 'toolIconPipe'
})
export class ToolIconPipe implements PipeTransform {

  transform(value: ToolType, args?: any): any {
    switch (value) {
      case  ToolType.PENCIL:
        return 'edit';
      case  ToolType.ERASER:
        return 'format_color_reset';
      case  ToolType.FILL:
        return 'format_color_fill';
      case  ToolType.PAINT:
        return 'format_paint';
      case  ToolType.PICKER:
        return 'colorize';
      case  ToolType.ZOOM:
        return 'search';
      default:
        return "";
    }
  }
}
