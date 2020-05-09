import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashtagsComponent } from './components/hashtags/hashtags.component';
import { HashtagComponent } from './components/hashtag/hashtag.component';
import { HomeComponent } from "./components/home/home.component";
import { PostComponent } from './components/post/post.component';
import { InteractComponent } from './components/interact/interact.component';
import { SearchComponent } from './components/search/search.component';
import { HashtagPostsComponent } from './components/hashtag-posts/hashtag-posts.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HashtagsComponent,
    HashtagComponent,
    HomeComponent,
    PostComponent,
    InteractComponent,
    SearchComponent,
    HashtagPostsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
