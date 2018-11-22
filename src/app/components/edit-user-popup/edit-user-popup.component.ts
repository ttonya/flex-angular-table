import { Component, OnInit, Inject } from '@angular/core';
import { Person } from '../../user.interface';
import { UsersService } from '../../services/users.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import { HandleErrorsService } from '../../services/handle-errors.service';


@Component({
  selector: 'app-edit-user-popup',
  templateUrl: './edit-user-popup.component.html',
  styleUrls: ['./edit-user-popup.component.css']
})
export class EditUserPopupComponent implements OnInit {

  Users: Person[];

  constructor(private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private handleErrors:HandleErrorsService) { }

  ngOnInit() {
  }

  editUser(uid, fname, lname) {
    this.usersService.edit(uid, fname, lname)
    .subscribe(user =>  this.handleErrors.catchErrors(user));

    this.usersService.configureUsers()
    .subscribe(users => {
      this.Users = users.body;
      this.handleErrors.catchErrors(users)});
 }
}
