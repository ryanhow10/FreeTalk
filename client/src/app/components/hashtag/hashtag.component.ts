import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from "@angular/router";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {

  @Input() hashtag:string;
  @Input() count:number;

  constructor(private router: Router, private postsService:PostsService) { }

  ngOnInit(): void {
  }

  changeHashtag(hashtag:string) {
    this.postsService.refreshHashtagPosts.next(hashtag);
    this.router.navigateByUrl("/hashtags/" + hashtag);
  }

}
