import { Component, OnInit } from '@angular/core';

// Rx
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

// Models
import {User} from '../../../core/models/user.interface';
import {UsersService} from '../../../core/services/users.service';


@Component({
  selector: 'cp-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  public target: string;

  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public users$: Observable<User[]> = this.usersService.getUsers(); // undefined
  public users: User[] = []; // []

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.loading$.next(true);
    return this.usersService.getUsers()
      .take(1)
      .do(() => this.loading$.next(false))
      .subscribe(list => this.users = list);
  }

  onKeyPress(event: KeyboardEvent){
    this.target = (event.target as HTMLInputElement).value;
    console.log('this is what is happening:', this.target);
  }

}
