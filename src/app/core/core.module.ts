import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Services
import {UsersService} from './services/users.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    UsersService,
  ],
  declarations: [FilterPipe],
  exports: [FilterPipe],
})
export class CoreModule { }
