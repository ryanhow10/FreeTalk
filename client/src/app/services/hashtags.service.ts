import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hashtag } from '../models/Hashtag';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HashtagsService {
  url:string = "http://localhost:8080/hashtags"

  constructor(private http:HttpClient) { }

  getHashtags():Observable<Hashtag[]> {
    return this.http.get<Hashtag[]>(this.url);
  }
}
