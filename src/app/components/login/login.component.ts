import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  profileLogin = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: ['', Validators.required]
  })
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
  }
  userErr: Boolean;
  get f() { return this.profileLogin.controls; }
  onSubmit() {
    console.log(this.profileLogin.value);
    this.submitted = true;

    // reset alerts on submit

    
    // stop here if form is invalid
    if (this.profileLogin.invalid) {
      return;
    }
    const token = this.authService.authUser(this.profileLogin.value);
    if (token) {
      localStorage.setItem('token', token.email)
      // localStorage.setItem('username',token.name)
      console.log("success");
      this.userErr = false;
      this.router.navigate(['home']);

    } else {
      console.log("failed");
      this.router.navigate(['login']);
      this.userErr = true;
    }

  }




}
