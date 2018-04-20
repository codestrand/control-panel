import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../../core/models/user.interface';
import {UsersService} from '../../../core/services/users.service';


@Component({
  selector: 'cp-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute, private users: UsersService) { }

  ngOnInit() {
    this.route.params.switchMap(params => {
      return this.users.getUser(params.id);
    })
      .subscribe(user => this.user = user);
  }

  save(input: any) {
    const changes: Partial<User> = {
      FirstName: input.FirstName,
      LastName: input.LastName,
      Email: input.Email,
    };
    this.users.updateUser(this.user.id, changes)
      .subscribe(() => {console.log('saved')}, error => console.error('error', error));
  }

}
