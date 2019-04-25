import { Component, OnInit } from '@angular/core';
import {ToolType} from "../../shared/enums/tool-type.enum";

@Component({
  selector: 'app-tool-selector',
  templateUrl: './tool-selector.component.html',
  styleUrls: ['./tool-selector.component.css']
})
export class ToolSelectorComponent implements OnInit {

  public selectedTool : ToolType;
  public toolType : ToolType;
  constructor() { }

  ngOnInit() {
  }



  public setTool(tool: ToolType){
    this.selectedTool = tool;
  }
}
