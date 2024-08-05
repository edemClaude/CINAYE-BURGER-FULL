import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

/*
  POST            api/login ................................................................ Auth\AuthController@login
  POST            api/logout .............................................................. Auth\AuthController@logout
  POST            api/register .......................................................... Auth\AuthController@register
  GET|HEAD        api/user ...........................................................................................
  GET|HEAD        api/users ................................................... users.index › Api\UserController@index
  POST            api/users ................................................... users.store › Api\UserController@store
  GET|HEAD        api/users/{user} .............................................. users.show › Api\UserController@show
  PUT|PATCH       api/users/{user} .......................................... users.update › Api\UserController@update
  DELETE          api/users/{user} ........................................ users.destroy › Api\UserController@destroy
  PUT             api/users/{user}/activate .............................................. Api\UserController@activate
  PUT             api/users/{user}/deactivate .......................................... Api\UserController@deactivate
*/

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8000/api/users');
  }

}
