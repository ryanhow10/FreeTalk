import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../../services/posts.service";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchParam:string;
  search:string;
  posts:Post[];

  constructor(private activatedRoute:ActivatedRoute, private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.newSearch.subscribe((search) => {
      this.search = search;
      this.getPosts(search);
    });
    this.setSearchParam();
    this.getPosts(this.searchParam);
  }

  setSearchParam() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchParam = params["search"];
      this.search = params["search"];
    });
  }

  getPosts(param: string) {
    this.postsService.getPosts(param).subscribe(resp => {
      this.posts = resp;
    });
  }
}
