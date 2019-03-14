import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFrameComponent } from './app-frame/app-frame.component';
import { HeaderComponent } from './app-frame/header/header.component';
import { FooterComponent } from './app-frame/footer/footer.component';
import { SidenavLeftComponent } from './app-frame/sidenav-left/sidenav-left.component';
import { SidenavRightComponent } from './app-frame/sidenav-right/sidenav-right.component';
import {
  MatButtonModule,
  MatIconModule,
  MatList,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {MainCanvasModule} from "../modules/main-canvas/main-canvas.module";
import {PaletteModule} from "../modules/palette/palette.module";

@NgModule({
  declarations: [
    AppFrameComponent,
    HeaderComponent,
    FooterComponent,
    SidenavLeftComponent,
    SidenavRightComponent
  ],
  imports: [
    CommonModule,
    MainCanvasModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    PaletteModule


  ],
  exports: [
    AppFrameComponent,
    HeaderComponent,
    FooterComponent,
    SidenavLeftComponent,
    SidenavRightComponent,
    MatSidenavModule,
    MatListModule,
    PaletteModule

  ]
})
export class CoreModule {
}
