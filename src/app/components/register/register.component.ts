import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;


  profileReg = this.fb.group({
    name: ['', Validators.required],
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: ['', Validators.required]
  })
  // constructor() { }
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService:UserService
  ) {
    // redirect to home if already logged in

  }
  user: any = {}
  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.profileReg.value);


    this.submitted = true;

    // reset alerts on submit


    // stop here if form is invalid
    if (this.profileReg.invalid) {
      return;
    }

    this.loading = true;

    this.user = Object.assign(this.user, this.profileReg.value);
    this.userService.addUser(this.user);
    this.router.navigate(['login']);
    // localStorage.setItem('Users',JSON.stringify(this.user));
    // this.addUser(this.user)

  }
  


}