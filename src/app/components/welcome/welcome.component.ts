import { Component } from '@angular/core';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  public user: User;

  ngOnInit() {
    this.user = this.userService.user;
  }

  constructor(private userService: UserService) {}
}
