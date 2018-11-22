import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { AddUserButtonComponent } from './components/add-user-button/add-user-button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import { AddUserPopupComponent } from './components/add-user-popup/add-user-popup.component';

import { FormsModule } from '@angular/forms';
import { EditUserPopupComponent } from './components/edit-user-popup/edit-user-popup.component';
import { DeleteUserPopupComponent } from './components/delete-user-popup/delete-user-popup.component';
import { MessagesComponent } from './components/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    AddUserButtonComponent,
    AddUserPopupComponent,
    EditUserPopupComponent,
    DeleteUserPopupComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddUserPopupComponent,
    EditUserPopupComponent,
    DeleteUserPopupComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
