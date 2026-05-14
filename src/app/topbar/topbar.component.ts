import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Screen } from '../model/Screen';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  readonly screen = Screen;
  router = inject(Router);

  open(screen: Screen) {
    switch (screen) {
      case Screen.Profile:
        this.router.navigate(['/profile']);
        console.log('open profile');
        break;
      case Screen.Settings:
        this.router.navigate(['/settings']);
        console.log('open settings');
        break;
      case Screen.Logout:
        this.router.navigate(['/logout']);
        console.log('open logout');
        break;
    }
  }
}
