import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly API_URL = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.API_URL);
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.API_URL}/${id}`);
  }

}
