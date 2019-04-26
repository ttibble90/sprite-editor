import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolIconPipe } from './pipes/tool-icon-pipe.pipe';
import { ToolTextPipePipe } from './pipes/tool-text-pipe.pipe';

@NgModule({
  declarations: [
    ToolIconPipe,
    ToolTextPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToolIconPipe,
    ToolTextPipePipe
  ]
})
export class SharedModule { }
