import {Component, Input, OnInit} from '@angular/core';
import { Post } from "../../models/Post";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:Post[];

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts("").subscribe(resp => {
      this.posts = resp;
    });
  }

}
