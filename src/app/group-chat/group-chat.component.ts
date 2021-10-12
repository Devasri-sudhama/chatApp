import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService) { }
  userMsg: any = []
  ngOnInit(): void {
  }
  // grpMsgs:any =[]
  grpMsgs = localStorage.getItem('messages') || '[]';
  grpChat = JSON.parse(this.grpMsgs)
  //userMsg = localStorage.getItem('messages');
  //userData = JSON.parse(this.userMsg)
  groupChat = this.fb.group({
    msg: ['']
  })
  onSubmit() {
    console.log(this.groupChat.value);
    if (this.groupChat.invalid) {
      return;
    }
    let username = localStorage.getItem('token')
    let sendTime = new Date().toLocaleString();
    console.log(username)
    if (this.groupChat.value.msg) {
      let myData = { msg: this.userMsg, username: username, time: sendTime }
      this.userMsg = Object.assign(myData, this.groupChat.value);
      console.log(myData)
      this.userService.grpChats(myData)
      this.grpMsgs = localStorage.getItem('messages') || '[]';
      this.grpChat = JSON.parse(this.grpMsgs)
      this.groupChat.setValue({ msg: "" })

    }


  }
}
