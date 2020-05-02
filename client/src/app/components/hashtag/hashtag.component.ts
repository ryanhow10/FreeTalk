import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {

  @Input() hashtag:string;
  @Input() count:number;

  constructor() { }

  ngOnInit(): void {
  }

}
