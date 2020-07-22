import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private static BASE_URL = 'http://localhost:8080/menus';

  constructor(private http: HttpClient) { }

getAll(): Observable<Menu[]> {
  return this.http.get<Menu[]>(MenuService.BASE_URL);
}
getById(id: number) {
  return this.http.get<Menu>(MenuService.BASE_URL + '/' + id);
}
}
