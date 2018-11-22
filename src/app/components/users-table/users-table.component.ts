import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Person } from '../../user.interface';
import { MatDialog } from '@angular/material';
import { EditUserPopupComponent } from '../edit-user-popup/edit-user-popup.component';
import { DeleteUserPopupComponent } from '../../components/delete-user-popup/delete-user-popup.component';
import { HandleErrorsService } from '../../services/handle-errors.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  
  Users: Person[];
 

  constructor( private usersService: UsersService,
    private dialog:MatDialog,
    private handleErrors:HandleErrorsService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers():void {
    this.usersService.configureUsers()
    .subscribe(
      users => {
        this.Users = users.body;
        this.handleErrors.catchErrors(users);
        console.log(this.handleErrors.catchErrors(users));    
      }
    )
    
  };
  openEditUser(user): void {
    let dialogEdit = this.dialog.open(EditUserPopupComponent, {
      width: '65%',
      height: '250px',
      data: { firstName: user.firstName, 
      lastName: user.lastName,
      id: user.id }
    });

    dialogEdit.afterClosed().subscribe(result => {
      this.getUsers();
      this.handleErrors.catchErrors(result);
    });

  }
  openDeleteUser(user): void {
    let dialogDelete= this.dialog.open(DeleteUserPopupComponent, {
      width: '65%',
      height: '250px',
      data: { id: user.id }
    });

    dialogDelete.afterClosed().subscribe(result => {
      this.getUsers();
      this.handleErrors.catchErrors(result)
    });
}
}

