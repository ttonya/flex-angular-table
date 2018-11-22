import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUserPopupComponent } from '../add-user-popup/add-user-popup.component';
import { UsersService } from '../../services/users.service';
import { Person } from '../../user.interface';

@Component({
  selector: 'app-add-user-button',
  templateUrl: './add-user-button.component.html',
  styleUrls: ['./add-user-button.component.css']
})
export class AddUserButtonComponent implements OnInit {

  Users: Person[];

  constructor(private dialog:MatDialog,
    private usersService: UsersService) { }

  ngOnInit() {
  }

  
  openCreateUser(user): void {
    const dialogToCreate = this.dialog.open(AddUserPopupComponent, {
      width: '65%',
      height: '250px'
    });
    dialogToCreate.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  getUsers() {
    this.usersService.configureUsers()
    .subscribe(users => this.Users = users.body);
  }


}
