import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  ngOnInit(): void {
    console.log('logging out ...');
    // TODO: implement logout logic
    // navigate to login page after logout
  }
}
