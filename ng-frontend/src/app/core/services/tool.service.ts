import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {PaintTool} from "../../shared/classes/paint-tool";

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  public toolStream : BehaviorSubject <PaintTool>;
  public toolList : PaintTool[] = [];
  constructor() {
    this.initTools();
    this.toolStream = new BehaviorSubject(this.toolList[0]);

  }

  public setTool (toolId: number): boolean{
    for (let i =0; i < this.toolList.length; i++){
      if (this.toolList[i].id === toolId){
        console.log('selected tool is now - ' + i);
        this.toolStream.next(this.toolList[i]);
        return true;
      }
    }
    return false;
  }


  private initTools(){
    this.toolList.push(new PaintTool(0, "Pencil", ()=>{}));
   this.toolList.push(new PaintTool(1, "Eraser", ()=>{}));
    this.toolList.push(new PaintTool(2, "Paint", ()=>{}));
    this.toolList.push(new PaintTool(3, "Fill", ()=>{}));
    this.toolList.push(new PaintTool(4, "Zoom", ()=>{}));
    this.toolList.push(new PaintTool(5, "Color Picker", ()=>{}));
  }
}
