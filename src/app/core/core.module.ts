import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Services
import {UsersService} from './services/users.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    UsersService,
  ],
})
export class CoreModule { }
