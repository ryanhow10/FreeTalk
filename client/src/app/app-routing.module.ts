import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import {HashtagPostsComponent} from "./components/hashtag-posts/hashtag-posts.component";
import {ErrorComponent} from "./components/error/error.component";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'hashtags/:hashtag', component: HashtagPostsComponent },
    { path: '**', component: ErrorComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
