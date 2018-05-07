import { Component, OnInit } from '@angular/core';

// Rx
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { combineLatest } from 'rxjs/observable/combineLatest';

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
  public limit$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public limitOptions: number[] = [1, 10, 100];

  public page$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public pageOptions: number[] = [1, 2, 3];

  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public users$: Observable<User[]> = combineLatest(this.limit$, this.page$)
    .switchMap(([limit, page]) => {
    console.log('I am inside the observable', limit);
    this.loading$.next(true);
    return this.usersService.getUsers(page, limit)
      .do(() => this.loading$.next(false));
  });

  public users: User[] = []; // []

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {}

}
