import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../../models/Post'
import { PostsService } from "../../services/posts.service";
import {HashtagsService} from "../../services/hashtags.service";

@Component({
  selector: 'app-interact',
  templateUrl: './interact.component.html',
  styleUrls: ['./interact.component.css']
})
export class InteractComponent implements OnInit {
  @Input() post:Post;

  constructor(private postsService:PostsService, private hashtagsService: HashtagsService) { }

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
    if(this.post.reports >= 3){
      this.post.hashtags.forEach(hashtag => {
        this.hashtagsService.decrementHashtagCount(hashtag).subscribe();
      });
      this.postsService.deletePost(this.post.postId).subscribe(() => {
        this.postsService.refreshPosts.next();
        this.hashtagsService.updateHashtags.next();
      });
    } else {
      this.postsService.updatePost(this.post).subscribe();
    }
  }
}
