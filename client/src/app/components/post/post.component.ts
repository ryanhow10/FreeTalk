import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post:Post;
  timeElapsedDays:number;
  timeElapsedHours:number
  timeElapsedMinutes:number;

  constructor() { }

  ngOnInit(): void {
    let currentTime = new Date();
    let created = new Date(this.post.createdOn);
    // @ts-ignore
    let differenceMs = (currentTime - created);
    this.timeElapsedDays =  Math.floor(differenceMs / 86400000);
    this.timeElapsedHours = Math.floor((differenceMs % 86400000) / 3600000);
    this.timeElapsedMinutes = Math.round(((differenceMs % 86400000) % 3600000) / 60000);
  }

}

