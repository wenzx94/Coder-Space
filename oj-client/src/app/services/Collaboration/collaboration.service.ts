import { Injectable } from '@angular/core';
import { COLORS } from '../../../assets/colors';
import { Cursor } from '../../models/cursor.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

declare var io: any;
declare var ace: any;
@Injectable()
export class CollaborationService {
  clientsInfo: Object = {};
  cursorsInfo: Object = {};
  clientNum: number = 0;
  collaborationSocket: any;

  public _curserSource = new BehaviorSubject<Object>([]);

  constructor() { }

  // init(): void {
  //   this.collaborationSocket = io(window.location.origin, { query: 'message=' +'hahahaha'});
  //   this.collaborationSocket.on('message', (message) => {
  //     console.log('message received from server: ' + message);
  //   });
  // }
  init(sessionId: string, editor: any, cursorInfo: string): void {
    this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId});

    // listeners

    //Cursor List(add on Mar 10)
    // this.collaborationSocket.on('addToList', (newClientId: string) => {
    //   if ( !(newClientId in this.clientsInfo)) {
    //     console.log('new client comes in: ' + newClientId);
    //   }
      

    // });

    this.collaborationSocket.on('change', (delta: string) => {
      console.log('collabration from server : editor changes by ' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });

    this.collaborationSocket.on('cursorMove', (cursor: string) => {
      console.log('cursor move:' + cursor);
      const session = editor.getSession();
      cursor = JSON.parse(cursor);
      const x = cursor['row'];
      const y = cursor['column'];
      const changeClientId = cursor['socketId'];
      var nickname = cursor['nickname'];
      

      if (changeClientId in this.clientsInfo) {
        session.removeMarker(this.clientsInfo[changeClientId]['marker']);
      } else {
        this.clientsInfo[changeClientId] = {};
        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `.editor_cursor_${changeClientId}
                        { 
                          position:absolute;
                          background-color:${COLORS[this.clientNum]};
                          z-index:100;
                          width:3px !important;
                        }`;
        document.body.appendChild(css);
        // var newCurser: Cursor = Object.assign({
        //   id: changeClientId,
        //   color: COLORS[this.clientNum]
        // });
        //this.cursorsInfo.push(new Cursor(newCurser));
        this.cursorsInfo[this.clientNum] = {};
        this.cursorsInfo[this.clientNum]['name'] = nickname;
        this.cursorsInfo[this.clientNum]['color'] = 'color' + COLORS[this.clientNum].substring(1);
        // if (this.cursorsInfo[nickname]) {
        //   this.cursorsInfo[nickname]['num']++;
        // } else this.cursorsInfo[nickname] = {};
        // this.cursorsInfo[nickname]['color'] = 
        //cursorInfo = JSON.stringify(this.cursorsInfo);
        //this.updateCursorList(this.cursorsInfo);
        this._curserSource.next(this.cursorsInfo);
        this.clientNum++;
      }
      const Range = ace.require('ace/range').Range;
      const newMarker = session.addMarker(new Range(x, y, x, y + 1), `editor_cursor_${changeClientId}`, true);
      this.clientsInfo[changeClientId]['marker'] = newMarker;
      //this.cursorsInfo[changeClientId]['color'] = COLORS[this.clientNum];
      console.log(this.cursorsInfo);
    });
  }

  change(delta: string) {
    this.collaborationSocket.emit('change', delta);
  }

  cursorMove(cursor: string) {
    this.collaborationSocket.emit('cursorMove', cursor);
  }

  restoreBuffer(): void {
    this.collaborationSocket.emit('restoreBuffer');
  }

  // updateCursorList(Object): Observable<Object> {
  //   // return this.problems;
  //   this._curserSource.next(this.cursorsInfo);
  //   return this._curserSource.asObservable();
  // }
}