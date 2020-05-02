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

  getPosts(search:string):Observable<Post> {
    if(search.length == 0){
      return this.http.get<Post>(this.url);
    } else {
      console.log("here");
      return this.http.get<Post>(this.url + "?search=" + search);
    }
  }

  addPost(username:string, content:string, hashtags:string[]):Observable<Post> {
    return this.http.post<Post>(this.url, {
      "username": username,
      "content": content,
      "hashtags": hashtags,
    });
  }
}
