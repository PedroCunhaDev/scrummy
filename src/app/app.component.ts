import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./navigation/navigation.component";
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavComponent, TopbarComponent, RouterOutlet]
})
export class AppComponent {
}
