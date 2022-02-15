import { ResponseUsers } from './users.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }


  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url)
  }
}
