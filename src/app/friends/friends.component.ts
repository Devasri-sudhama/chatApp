import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(
    private fb: FormBuilder,
    private userService: UserService) { }
  userMsg: any = []
  ngOnInit(): void {
  }
  // grpMsgs:any =[]
  frndMsgs = localStorage.getItem('frndsChat') || '[]';
  frndChat = JSON.parse(this.frndMsgs)
  //userMsg = localStorage.getItem('messages');
  //userData = JSON.parse(this.userMsg)
  chatWindow = this.fb.group({
    msg: [''],
    frnd: ['']
  })
  onSubmit() {
    console.log(this.chatWindow.value);
    if (this.chatWindow.invalid) {
      return;
    }
    let username = localStorage.getItem('token')
    let sendTime = new Date().toLocaleString();
    console.log(this.chatWindow.value)
    if (this.chatWindow.value.msg) {
      let myData = { msg: this.chatWindow.value.msg, username: username, frnd: this.chatWindow.value.frnd, time: sendTime }
      this.userMsg = Object.assign(myData, this.chatWindow.value);
      console.log(myData)
      this.userService.frndChats(myData)
      this.frndMsgs = localStorage.getItem('frndsChat') || '[]';
      this.frndChat = JSON.parse(this.frndMsgs)
      this.chatWindow.setValue({ msg: "" })

    }


  }


  usersReg = localStorage.getItem('Users') || '';
  usersRegister = JSON.parse(this.usersReg)


}
