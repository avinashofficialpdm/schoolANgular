import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDetailsComponent } from './displayDetails/displayDetails.component';
import { AddUserComponent } from './addUser/addUser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './editUser/editUser.component';

@NgModule({
  declarations: [				
    AppComponent,
      DisplayDetailsComponent,
      AddUserComponent,
      EditUserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
