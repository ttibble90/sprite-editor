import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolSelectorComponent} from "./tool-selector.component";
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [ToolSelectorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ],
  exports:[ToolSelectorComponent]
})
export class ToolSelectorModule {

}

