import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
