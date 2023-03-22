import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MockApiService } from '../mock-api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  public checkEmailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public changePasswordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.email]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(''),
    ]),
  });

  public showLoader = false;
  public emailIsValid: boolean = false;

  constructor(private mockApi: MockApiService) {}

  public emailValid(): boolean {
    this.showLoader = true;

    setTimeout(() => {
      if (this.mockApi.emailExists(this.checkEmailForm.value.email)) {
        this.emailIsValid = true;
        this.showLoader = false;
        return true;
      } else {
        alert("Please enter a valid email!");
        this.showLoader = false;
        return false;
      }
    }, 2000);

    return false;
  }

  public changePassword() {
    const email = this.checkEmailForm.value.email;
    const password = this.changePasswordForm.value.password;
    
    if(email && password) {
      this.showLoader = true;
      setTimeout(() => {
        this.mockApi.changePassword(email, password)
      }, 2000)
    } else {
      alert("Please enter a new password!");
    }
  }
}
