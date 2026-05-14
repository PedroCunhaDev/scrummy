import { Routes } from '@angular/router';
import * as c from './index';

export const routes: Routes = [
  { path: 'work-items', component: c.WorkItemComponent },
  { path: 'sprints', component: c.SprintComponent },
  { path: 'backlog', component: c.BacklogComponent },
  { path: 'retrospective', component: c.RetroComponent },
  { path: 'profile', component: c.ProfileComponent },
  { path: 'settings', component: c.SettingsComponent },
  { path: 'logout', component: c.LogoutComponent }
];
