import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private static BASE_URL = 'http://localhost:8080/reviews';

  constructor(private http: HttpClient) { }

getAll(): Observable<Review[]> {
  return this.http.get<Review[]>(ReviewService.BASE_URL);
}
getById(id: number) {
  return this.http.get<Review>(ReviewService.BASE_URL + '/' + id);
}
}
