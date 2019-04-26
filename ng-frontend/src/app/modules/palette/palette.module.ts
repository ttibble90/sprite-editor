import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaletteComponent } from './palette.component';
import {MaterialModule} from "../material/material.module";

@NgModule({
  declarations: [PaletteComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [PaletteComponent]
})
export class PaletteModule { }
