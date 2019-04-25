import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-left',
  templateUrl: './sidenav-left.component.html',
  styleUrls: ['./sidenav-left.component.css']
})
export class SidenavLeftComponent implements OnInit {

  public showPalette : boolean;
  public showTools : boolean;

  constructor() { }

  ngOnInit() {
    this.showTools = true;
    this.showPalette = true;
  }

}
