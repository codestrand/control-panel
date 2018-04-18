import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Dependencies
import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
