import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

// Dependencies
import { UsersRoutingModule } from './users-routing.module';
import {CoreModule} from '../core/core.module';

import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersListComponent]
})
export class UsersModule { }
