import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Screen } from '../model/Screen';

@Component({
  selector: 'navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavComponent {
  readonly screen = Screen;
  router = inject(Router);

  open(screen: Screen) {
    switch (screen) {
      case Screen.WorkItems:
        this.router.navigate(['/work-items']);
        console.log('open work items');
        break;
      case Screen.Sprints:
        this.router.navigate(['/sprints']);
        console.log('open sprints');
        break;
      case Screen.Backlog:
        this.router.navigate(['/backlog']);
        console.log('open backlog');
        break;
      case Screen.Retrospective:
        this.router.navigate(['/retrospective']);
        console.log('open retrospective');
        break;
      default:
        console.log('unknown screen');
        break;
    }
  }
}
