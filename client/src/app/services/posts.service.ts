import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from '../models/Post';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url:string = "http://localhost:8080/posts";

  constructor(private http:HttpClient) { }

  addPost(username:string, content:string, hashtags:string[]):Observable<Post> {
    console.log(username);
    console.log(content);
    console.log(hashtags);
    return this.http.post<Post>(this.url, {
      "username": username,
      "content": content,
      "hashtags": hashtags,
    });
  }
}
