import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// Dependencies
import { UsersRoutingModule } from './users-routing.module';
import {CoreModule} from '../core/core.module';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  declarations: [UsersListComponent, UserViewComponent, UserEditComponent]
})
export class UsersModule { }
