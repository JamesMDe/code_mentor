import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  constructor(private router: Router) {}

  users: User[] = [
    {
      email: 'waleed@email.com',
      password: '123',
    },
    {
      email: 'james@email.com',
      password: 'abc',
    },
  ];

  public emailExists(email: string): boolean {
    for (let user of this.users) {
      if (user.email === email) {
        return true;
      }
    }
    return false;
  }

  public credentialsValid(email: string, password: string): boolean {
    for (let user of this.users) {
      if (user.email === email && user.password === password) {
        return true;
      }
    }
    return false;
  }

  public changePassword(email: string, password: string): void {
      this.users.map((user) => {
        if (user.email === email) user.password = password;
      });

      this.router.navigate(['']);
  }
}
