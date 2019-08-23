import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {App1Component} from './app1/app1.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    App1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class AppModule {
  constructor(private injector: Injector) {
    const app1 = createCustomElement(App1Component, {injector});
    customElements.define('app1', app1);
  }

}
