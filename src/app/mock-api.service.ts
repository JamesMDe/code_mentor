import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
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
      name: "Waleed",
      email: 'waleed@email.com',
      password: '123',
    },
    {
      name: "James",
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

  public getUser(email: string, password: string): User | null {
    for (let user of this.users) {
      if (user.email === email && user.password === password) {
        return user;
      }
    }

    return null;
  }

  public changePassword(email: string, password: string): void {
      this.users.map((user) => {
        if (user.email === email) user.password = password;
      });

      this.router.navigate(['']);
  }
}
