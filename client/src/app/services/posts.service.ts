import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from '../models/Post';
import { Observable } from "rxjs";

class List<T> {
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url:string = "http://localhost:8080/posts";

  constructor(private http:HttpClient) { }

  getPosts(search:string):Observable<Post[]> {
    if(search.length == 0){
      return this.http.get<Post[]>(this.url);
    } else {
      return this.http.get<Post[]>(this.url + "?search=" + search);
    }
  }

  addPost(username:string, content:string, hashtags:string[]):Observable<Post> {
    return this.http.post<Post>(this.url, {
      "username": username,
      "content": content,
      "hashtags": hashtags,
    });
  }

  updatePost(post:Post):Observable<Post> {
    return this.http.put<Post>(this.url + "/" + post.postId, {
      "username": post.username,
      "content": post.content,
      "hashtags": post.hashtags,
      "likes": post.likes,
      "dislikes": post.dislikes,
      "reports": post.reports
    });
  }

}
