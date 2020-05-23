import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from '../models/Post';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import { tap } from "rxjs/operators";

class List<T> {
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url:string = "http://localhost:8080/posts";
  refreshPosts = new Subject<void>();
  refreshHashtagPosts = new BehaviorSubject<string>('default');
  newSearch = new BehaviorSubject<string>('default');

  constructor(private http:HttpClient) { }

  getPosts(search:string):Observable<Post[]> {
    if(search.length == 0){
      return this.http.get<Post[]>(this.url);
    } else {
      return this.http.get<Post[]>(this.url + "?search=" + search);
    }
  }

  getPostsByHashtag(hashtag:string):Observable<Post[]> {
    return this.http.get<Post[]>(this.url + "/hashtags/" + hashtag);
  }

  addPost(username:string, content:string, hashtags:string[]):Observable<Post> {
    return this.http.post<Post>(this.url, {
      "username": username,
      "content": content,
      "hashtags": hashtags,
    }).pipe(
      tap(() => {
        this.refreshPosts.next();
      })
    );
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

  deletePost(postId:string):Observable<Post> {
    return this.http.delete<Post>(this.url + "/" + postId);
  }
}
