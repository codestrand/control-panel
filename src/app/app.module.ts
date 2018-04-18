import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Dependencies
import {AppRoutingModule} from './app-routing.module';

// Components
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
