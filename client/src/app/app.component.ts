import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { HashtagsService } from "./services/hashtags.service";
import { Router } from "@angular/router";
// @ts-ignore
import { animals } from '../assets/animals.json';
import { Post } from "./models/Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  smallScreen:boolean = false;
  content:string = "";
  hashtags:string[] = [];
  search:string = "";

  constructor(private postsService:PostsService, private hashtagsService:HashtagsService, private router:Router) {
  }

  ngOnInit():void {
    if(window.screen.width < 768){
      this.smallScreen = true;
    }
  }

  resetContentAndHashTags() {
    this.content = "";
    this.hashtags = [];
  }

  searchPosts() {
    this.postsService.newSearch.next(this.search);
    this.router.navigateByUrl("/search?search=" + this.search);
  }

  getHashtagsFromContent(content:string) {
    let words = content.split(" ");
    words.forEach(word => {
      if(word.charAt(0) === '#'){
        this.hashtags.push(word.substr(1, word.length));
      }
    });
  }

  addPost(){
    this.getHashtagsFromContent(this.content);
    this.hashtags.forEach(hashtag => {
      this.hashtagsService.addHashtag(hashtag).subscribe();
    })
    this.postsService.addPost("Anonymous " + animals[Math.floor(Math.random() * animals.length)], this.content, this.hashtags).subscribe();
    this.resetContentAndHashTags();
  }

}
