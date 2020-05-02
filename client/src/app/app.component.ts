import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';
import { animals } from '../assets/animals.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  url:String = "http://localhost:8080/posts";
  smallScreen:boolean = false;
  content:string = "";
  hashtags:string[] = [];

  constructor(private postsService:PostsService) {
  }

  ngOnInit() {
    if(window.screen.width < 768){
      this.smallScreen = true;
    }
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

  addPost(){
    this.getHashtagsFromContent(this.content);
    this.postsService.addPost("Anonymous " + animals[Math.floor(Math.random() * animals.length)], this.content, this.hashtags).subscribe();
    this.resetContentAndHashTags();
  }

}

