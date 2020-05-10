import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hashtag } from '../models/Hashtag';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HashtagsService {
  url:string = "http://localhost:8080/hashtags"

  constructor(private http:HttpClient) { }

  getHashtags():Observable<Hashtag[]> {
    return this.http.get<Hashtag[]>(this.url);
  }

  addHashtag(name:string):Observable<Hashtag> {
    return this.http.post<Hashtag>(this.url, {
      "name": name
    });
  }
}
