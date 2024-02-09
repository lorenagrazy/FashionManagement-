import { Component } from '@angular/core';

@Component({
  selector: 'app-full',
  template: `
  <app-menu></app-menu> 
  <app-anchor></app-anchor>
  <router-outlet></router-outlet>
  `,
})
export class FullComponent {

}
