import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {MfDevelopersComponent} from './mf-developers/mf-developers.component';
import {createCustomElement} from '@angular/elements';
import {DeveloperDetailComponent} from './mf-developers/developers/developer-detail/developer-detail.component';
import {DevelopersComponent} from './mf-developers/developers/developers.component';

@NgModule({
  declarations: [
    MfDevelopersComponent,
    DevelopersComponent,
    DeveloperDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    MfDevelopersComponent,
    DevelopersComponent,
    DeveloperDetailComponent
  ],
  bootstrap: [MfDevelopersComponent]
})
export class MfDeveloperModule {
  constructor(private injector: Injector) {
    const mfDevelopers = createCustomElement(MfDevelopersComponent, {injector});
    customElements.define('mf-developers', mfDevelopers);
  }

}
