import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private static BASE_URL = 'http://localhost:8080/artists';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Artist[]> {
    return this.http.get<Artist[]>(ArtistService.BASE_URL);
  }
}
