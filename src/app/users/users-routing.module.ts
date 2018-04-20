import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserViewComponent} from './components/user-view/user-view.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersListComponent,
  },
  {
    path: ':id',
    component: UserViewComponent,
  },
  {
    path: ':id/edit',
    component: UserEditComponent,
  },
  {
    path: 'new',
    component: UserEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
