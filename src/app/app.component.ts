import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatApp';
  constructor(private router: Router) { }
username = localStorage.getItem('token');
  ngOnInit() { }

  loggedIn() {
    return localStorage.getItem('token');
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
