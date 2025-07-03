import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { GameControl } from './game-control/game-control';
import { Odd } from './odd/odd';
import { Even } from './even/even';


@NgModule({
  declarations: [
    App,
    GameControl,
    Odd,
    Even,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
