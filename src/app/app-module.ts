import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Coockpit } from './coockpit/coockpit';
import { ServerElement } from './server-element/server-element';


@NgModule({
  declarations: [
    App,
    Coockpit,
    ServerElement,
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
