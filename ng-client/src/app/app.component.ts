import { Component } from '@angular/core';
import {WebsocketService} from "./services/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-client';

  constructor(wsService : WebsocketService){
    wsService.wsObservable.subscribe((msg)=>{
      console.log('Message received');
      console.log(msg);
    });
  }
}
