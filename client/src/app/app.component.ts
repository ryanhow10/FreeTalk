import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { HashtagsService } from "./services/hashtags.service";
import { Router } from "@angular/router";
// @ts-ignore
import { animals } from '../assets/animals.json';

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

  isHashtag(content: string): boolean {
    if(content.charAt(0) === '#'){
      return true;
    }
    return false;
  }

  removeHashtag(content: string): string {
    return content.substr(1, content.length)
  }

  searchPosts() {
    if(this.isHashtag(this.search)) {
      let hashtag = this.removeHashtag(this.search);
      this.postsService.refreshHashtagPosts.next(hashtag);
      this.router.navigateByUrl("/hashtags/" + hashtag);
    } else {
      this.postsService.newSearch.next(this.search);
      this.router.navigateByUrl("/search?search=" + this.search);
    }
    this.search = "";
  }

  getHashtagsFromContent(content:string) {
    let words = content.split(" ");
    words.forEach(word => {
      if(this.isHashtag(word)){
        let hashtag = this.removeHashtag(word);
        this.hashtags.push(hashtag);
      }
    });
  }

  generateUsername() {
    return "Anonymous " + animals[Math.floor(Math.random() * animals.length)];
  }

  addPost(){
    this.getHashtagsFromContent(this.content);
    this.hashtags.forEach(hashtag => {
      this.hashtagsService.addHashtag(hashtag).subscribe();
    })
    this.postsService.addPost(this.generateUsername(), this.content, this.hashtags).subscribe(() => {
      this.hashtagsService.updateHashtags.next();
    });
    this.resetContentAndHashTags();
  }

}
