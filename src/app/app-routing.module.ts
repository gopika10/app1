import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeveloperDetailComponent} from './mf-developers/developers/developer-detail/developer-detail.component';
import {DevelopersComponent} from './mf-developers/developers/developers.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopersComponent,
  },
  {
    path: 'developers',
    component: DevelopersComponent,
  },
  {
    path: 'developers/:devId',
    component: DeveloperDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
