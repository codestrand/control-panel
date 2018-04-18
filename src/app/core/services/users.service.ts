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

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/assets/data/users.json');
  }

}
