import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppOneComponent} from './app-one/app-one.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppOneComponent]
})
export class AppOneModule {
  constructor(private injector: Injector) {
    const app1 = createCustomElement(AppOneComponent, {injector});
    customElements.define('app-one', app1);
  }

}
