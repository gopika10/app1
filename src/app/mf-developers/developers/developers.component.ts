import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent {
  developers = [{
    devId: 1,
    name: 'Developer1',
    description: 'Lorem Ispsum'
  }, {
    devId: 2,
    name: 'Developer2',
    description: 'Lorem Ispsum'
  }, {
    devId: 3,
    name: 'Developers3',
    description: 'Lorem Ispsum'
  }, {
    devId: 4,
    name: 'Developers4',
    description: 'Lorem Ispsum'
  }, {
    developersId: 5,
    name: 'Developers5',
    description: 'Lorem Ispsum'
  }];
}
