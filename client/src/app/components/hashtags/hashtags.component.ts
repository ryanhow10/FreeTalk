import { Component, OnInit } from '@angular/core';
import { HashtagsService } from "../../services/hashtags.service";
import { Hashtag } from "../../models/Hashtag";

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.css']
})
export class HashtagsComponent implements OnInit {
  hashtags:Hashtag[] = [];

  constructor(private hashtagService:HashtagsService) { }

  ngOnInit(): void {
    this.getTopHashtags();
  }

  getTopHashtags() {
    this.hashtagService.getHashtags().subscribe(resp => {
      this.hashtags = resp;
    })
  }

}
