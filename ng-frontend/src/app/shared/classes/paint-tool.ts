export enum ToolType {
  PENCIL = 0,
  ERASER,
  PAINT,
  FILL,
  ZOOM,
  PICKER
}

export class PaintTool {
  public id: number;
  public displayName: string;
  public toolParameters: object; // todo : same deal
  public paintFunction: () => void;  // todo - update when I figure out what object to pass in order to pass canvas context

  constructor (id: number, displayName:string,  paintFunction: ()=>void , params? : object ){
    this.id = id;
    this.displayName= displayName;
    this.toolParameters = params;
    this.paintFunction = paintFunction;
  }
}
