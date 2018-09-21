import { Injectable } from '@angular/core';

import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  _users: IUser[] = [
    {id: 1, name: 'andres'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'mary'},
  ]

  constructor() { }

  get users() {
    return setTimeout(() => {
      return this.users
    },

    1200);
  }

  hello(name: string) {
    return `Hello ${name}`;
  }
}
