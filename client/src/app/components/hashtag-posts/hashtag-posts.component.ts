import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../services/posts.service";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-hashtag-posts',
  templateUrl: './hashtag-posts.component.html',
  styleUrls: ['./hashtag-posts.component.css']
})
export class HashtagPostsComponent implements OnInit {
  hashtag:string;
  posts:Post[];

  constructor(private activatedRoute:ActivatedRoute, private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.refreshHashtagPosts.subscribe((hashtag) => {
      this.getPosts(hashtag);
    });
    this.setHashtag()
    this.getPosts(this.hashtag);
  }

  setHashtag() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.hashtag = paramMap["params"]["hashtag"];
    });
  }

  getPosts(hashtag: string) {
    this.postsService.getPostsByHashtag(hashtag).subscribe(resp => {
      this.posts = resp;
    });
  }

}
