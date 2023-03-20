import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MockApiService } from '../mock-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(''),
    ]),
  });

  public showLoader: boolean = false;

  ngOnInit() {}

  constructor(private mockApi: MockApiService, private router: Router) {}

  public login() {
    this.showLoader = true;

    let email: string = this.loginForm.value.email;
    let password: string = this.loginForm.value.password;

    setTimeout(() => {
      if (this.mockApi.credentialsValid(email, password)) {
        this.router.navigate(['welcome']);
        this.showLoader = false;
      } else {
        this.showLoader = false;
        alert('Please enter a valid email and password!');
      }
    }, 2000);
  }
}
