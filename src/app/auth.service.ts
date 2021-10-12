import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: any) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users') || '{}');
    }
    return UserArray.find((p: { email: string; password: string; }) => p.email === user.email && p.password === user.password);
  }
  loggedIn() {
    //return boolean for loggedIn user logic
    return localStorage.getItem('token');
}
}
