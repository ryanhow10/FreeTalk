import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../../models/Post'
import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-interact',
  templateUrl: './interact.component.html',
  styleUrls: ['./interact.component.css']
})
export class InteractComponent implements OnInit {
  @Input() post:Post;

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
  }

  addLike() {
    this.post.likes++;
    this.postsService.updatePost(this.post).subscribe();
  }

  addDislike() {
    this.post.dislikes++;
    this.postsService.updatePost(this.post).subscribe();
  }

  addReport() {
    this.post.reports++;
    this.postsService.updatePost(this.post).subscribe();
  }
}