import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  frndChats(message: any) {
    console.log(message)
    let messages = []
    if (localStorage.getItem('frndChats')) {
      messages = JSON.parse(localStorage.getItem('frndChats') || '[]');
      messages = [message, ...messages];
    } else {
      messages = [message];
    }
    console.log(messages)
    localStorage.setItem('frndChats',JSON.stringify(messages));
    console.log(localStorage.getItem("frndChats"))
  }
  constructor() { }
 
  addUser(user: any) {
    let users = []
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') || '[]');
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }

  grpChats(message: any) {
    console.log(message)
    let messages = []
    if (localStorage.getItem('messages')) {
      messages = JSON.parse(localStorage.getItem('messages') || '[]');
      messages = [message, ...messages];
    } else {
      messages = [message];
    }
    console.log(messages)
    localStorage.setItem('messages',JSON.stringify(messages));
    console.log(localStorage.getItem("messages"))
  }
}
