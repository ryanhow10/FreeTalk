import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() title:string;
  @Input() posts:Post[];

  constructor() { }

  ngOnInit(): void {
  }

}
