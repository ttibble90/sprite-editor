import { Component, OnInit } from '@angular/core';
import {PaintTool, ToolType} from "../../shared/classes/paint-tool";
import {ToolService} from "../../core/services/tool.service";


@Component({
  selector: 'app-tool-selector',
  templateUrl: './tool-selector.component.html',
  styleUrls: ['./tool-selector.component.css']
})
export class ToolSelectorComponent implements OnInit {

  public selectedTool : PaintTool;
  public toolTypeEnum;
  public toolList;
  constructor(private toolService : ToolService) {
    this.toolTypeEnum = ToolType;
  }

  ngOnInit() {
    this.toolList = this.toolService.toolList;
    this.toolService.toolStream.subscribe((tool)=>{
      this.selectedTool = tool;
    })
  }



  public setTool(tool: ToolType){

    //this.selectedTool = tool;
    this.toolService.setTool(tool);
  }
}
