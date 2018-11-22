import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../user.interface';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  usersUrl = "http://localhost:3000/users";

  configureUsers():Observable<HttpResponse<Person[]>> {
    return this.http.get<Person[]>(this.usersUrl, { observe: 'response' });
  }
  
  delete(id: number):Observable<HttpResponse<{}>> {
    let userToDelete:any = `${this.usersUrl}/${id}`;  
    console.log(userToDelete);                      
    return this.http.delete(userToDelete, { observe: 'response' });
  }

  add(user:Person):Observable<HttpResponse<Person>>{   
   return this.http.post<Person>(this.usersUrl, user, { observe: 'response' });
  }

  edit(uid:number, fname:string, lname:string):Observable<HttpResponse<any>>{
    let userToUpdate:any = `${this.usersUrl}/${uid}`;  
      let body:Person = {
        id: uid,
        firstName: fname, 
        lastName: lname
      };
      return this.http.put<Person>(userToUpdate, body, { observe: 'response' });
      };

  }

