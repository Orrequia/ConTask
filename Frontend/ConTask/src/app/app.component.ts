import { Component } from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { Store } from '@ngrx/store';

import * as fromStore from '@app/state';
import { Logout } from '@app/core/auth/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    //constructor(private store: Store<fromStore.State>) {}
      /*const menu = remote.Menu.buildFromTemplate([{
          label: 'Archivo',
          submenu: [{
              label: 'Open',
              click: () => {
                  console.log('Hola Macareno');
              }
          }, {
              label: 'Openanother',
              click: () => {
                  ipcRenderer.send('Opengoogle');
              }
          }]
      }]);
      remote.Menu.setApplicationMenu(menu);*/

    loggedIn$ = this.store.select(fromStore.selectIsLoggedIn);

    constructor(private store: Store<fromStore.State>) {}

    onLogout() {
        this.store.dispatch(new Logout());
    }
}
