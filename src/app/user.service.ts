import { Injectable } from '@angular/core';

export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user = {
    name: "",
    email: "",
  };

  constructor() { }

  public set user(user: User) {
    this._user = user;
  }

  public get user() {
    return this._user;
  }
}
