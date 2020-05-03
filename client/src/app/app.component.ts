import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { HashtagsService } from "./services/hashtags.service";
// @ts-ignore
import { animals } from '../assets/animals.json';
import {Post} from "./models/Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = "Home";
  smallScreen:boolean = false;
  content:string = "";
  hashtags:string[] = [];
  search:string = "";
  posts:Post[] = [];

  constructor(private postsService:PostsService, private hashtagsService:HashtagsService) {
  }

  ngOnInit():void {
    if(window.screen.width < 768){
      this.smallScreen = true;
    }
    this.getPosts();
  }

  resetContentAndHashTags() {
    this.content = "";
    this.hashtags = [];
  }

  getHashtagsFromContent(content:string) {
    let words = content.split(" ");
    words.forEach(word => {
      if(word.charAt(0) === '#'){
        this.hashtags.push(word.substr(1, word.length));
      }
    });
  }

  getPosts() {
    let dummySearch = this.search;
    if(this.search.charAt(0) == '#'){
      dummySearch = "%23" + this.search.substr(1, this.search.length);
    }
    this.postsService.getPosts(dummySearch).subscribe(resp => {
      this.posts = resp;
    });
  }

  addPost(){
    this.getHashtagsFromContent(this.content);
    this.hashtags.forEach(hashtag => {
      this.hashtagsService.addHashtag(hashtag).subscribe();
    })
    this.postsService.addPost("Anonymous " + animals[Math.floor(Math.random() * animals.length)], this.content, this.hashtags).subscribe();
    this.resetContentAndHashTags();
    this.getPosts();
  }

}
