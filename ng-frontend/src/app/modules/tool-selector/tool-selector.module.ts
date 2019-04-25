import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolSelectorComponent} from "./tool-selector.component";
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ToolSelectorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[ToolSelectorComponent]
})
export class ToolSelectorModule {

}

