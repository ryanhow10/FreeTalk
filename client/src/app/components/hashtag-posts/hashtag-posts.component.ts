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
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.hashtag = paramMap["params"]["hashtag"];
    });
    this.postsService.getPostsByHashtag(this.hashtag).subscribe(resp => {
      this.posts = resp;
    })
  }

}
