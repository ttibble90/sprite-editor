export interface SpriteFile {
  filename: string;
  height: number;
  width: number;
  isBGTile: boolean;
  is16Color: boolean;

  paletteMap : number [] [];

}
