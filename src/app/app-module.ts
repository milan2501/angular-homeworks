import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { Servers } from './servers/servers';
import { WarningAlert } from './warning-alert/warning-alert';
import { SuccessAlert } from './success-alert/success-alert';

@NgModule({
  declarations: [
    App,
    ServerComponent,
    Servers,
    WarningAlert,
    SuccessAlert
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
