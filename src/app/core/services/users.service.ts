import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// Rx
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// Models
import {User} from '../models/user.interface';

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(page = 1, limit = 1): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users', {
      params: {
        _page: page.toString(10),
        _limit: limit.toString(10),
      }
    });
  }

  public getUser(id: string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users/' + id);
  }

  public updateUser(id: string, changes: Partial<User>) {
    return this.http.patch('http://localhost:3000/users/' + id, changes);
  }

}
