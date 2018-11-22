import { Component, OnInit } from '@angular/core';
import { Person } from '../../user.interface';
import { UsersService } from '../../services/users.service';
import { HandleErrorsService } from '../../services/handle-errors.service';

@Component({
  selector: 'app-add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.css']
})
export class AddUserPopupComponent implements OnInit {

  constructor(private usersService: UsersService,
    private handleErrors:HandleErrorsService ) { }

  Users: Person[];

  ngOnInit() {
    this.getUsers();
  }
  
  createUser(uid, fname, lname):any {
    let newUser: Person = { 
       id: getRandomInt(1000),
       firstName: fname, 
       lastName: lname};
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    this.usersService.add(newUser)
    .subscribe(
      u =>  {
        this.Users.push(u.body);
        this.handleErrors.catchErrors(u)}
      ); 
      
  }

  getUsers() {
    this.usersService.configureUsers()
    .subscribe(users => {
      this.Users = users.body;
      this.handleErrors.catchErrors(users) });
  }

}
