import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private _wsSubject : Subject<any>;
  public wsObservable : Observable<any>;
  private ws : any;

  constructor() {
    this._wsSubject = new Subject<any>();
    this.wsObservable = this._wsSubject.asObservable();

    this.connect();
  }
  private connect(): void {
    console.log('connecting!');
    this.ws = new WebSocket('ws://' + window.location.hostname +':40510');


    this.ws.onopen = function () {
      console.log('websocket is connected ...')

      // sending a send event to websocket server
      document.getElementById('testP').innerText = "CONNECTED!!!";
    };

    // event emmited when receiving message
    this.ws.onmessage =  (msg) => {
      this._wsSubject.next(msg);
    };
    this.ws.onerror = (err)=>{
      this._wsSubject.error(err);
    };
    this.ws.onclose =  (e) => {
      console.log('closed');
      this._wsSubject.complete();
    };
  }

  public sendMessage(msgObj) : boolean {
    if(this.ws){
      this.ws.send(JSON.stringify(msgObj));
      return true;
    }
    return false;
  }
}
