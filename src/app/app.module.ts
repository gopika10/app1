import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {MfSidebarComponent} from './mf-sidebar/mf-sidebar.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    MfSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MfSidebarComponent]
})
export class MfSidebarModule {
  constructor(private injector: Injector) {
    const app1 = createCustomElement(MfSidebarComponent, {injector});
    customElements.define('mf-sidebar', app1);
  }

}
