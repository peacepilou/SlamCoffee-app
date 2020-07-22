import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private static BASE_URL = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

getAll(): Observable<User[]> {
  return this.http.get<User[]>(UserService.BASE_URL);
}
getById(id: number) {
  return this.http.get<User>(UserService.BASE_URL + '/' + id);
}
}
