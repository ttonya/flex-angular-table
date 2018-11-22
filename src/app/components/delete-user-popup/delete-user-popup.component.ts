import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Person } from '../../user.interface';
import { UsersService } from '../../services/users.service';
import { HandleErrorsService } from '../../services/handle-errors.service';


@Component({
  selector: 'app-delete-user-popup',
  templateUrl: './delete-user-popup.component.html',
  styleUrls: ['./delete-user-popup.component.css']
})
export class DeleteUserPopupComponent implements OnInit {

  Users: Person[];

  constructor(private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private handleErrors:HandleErrorsService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.configureUsers()
    .subscribe(users => {
      this.Users = users.body;
      this.handleErrors.catchErrors(users)});
  }

  deleteUser(id) {
    this.Users = this.Users.filter(u => u.id !== id);
    this.usersService.delete(id).subscribe(user =>  this.handleErrors.catchErrors(user));
  }


}
