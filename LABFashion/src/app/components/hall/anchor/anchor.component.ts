import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent {
  constructor(private router: Router) { }

  goToAccountPage() {
    this.router.navigate(['/login']);
  }

  goToSettingsPage() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
