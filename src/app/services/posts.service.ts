import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostsInterface } from '../models/Posts';

@Injectable({
  providedIn: 'root'
})

export class PostsService{

  JSON_URL = 'https://jsonplaceholder.typicode.com';
  
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsInterface>{
    let data = {limit: '2', userId: '2'};
    return this.http.get <PostsInterface> (this.JSON_URL + '/posts', { 
      params : data
    });
  }
}
