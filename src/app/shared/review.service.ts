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
  postReview(review: Review) {
    return this.http.post(ReviewService.BASE_URL, review);
  }
  putReview(id: number, review: Review) {
    return this.http.put(ReviewService.BASE_URL + '/' + id, review);
  }
  deleteReview(id: number) {
    return this.http.delete(ReviewService.BASE_URL + '/' + id);
  }
}
