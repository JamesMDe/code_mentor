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

  public emailIsValid: boolean = false;

  constructor(private mockApi: MockApiService) {}

  public emailValid(): boolean {
    if (this.mockApi.emailExists(this.checkEmailForm.value.email)) {
      this.emailIsValid = true;
      return true;
    }
    return false;
  }
}
