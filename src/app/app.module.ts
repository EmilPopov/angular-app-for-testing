import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
   MdButtonModule,
   MdCheckboxModule,
   MdListModule,
   MdGridListModule,
   MdSidenavModule,
   MdTabsModule
  } from '@angular/material';

// services
import { ProfileService } from "../app/gitHubInfo/services/profile.service";
import { FollowersService } from "../app/gitHubInfo/services/followers.service";
import { CarsService } from "../app/cars/cars.service";

//components
import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticleDescriptionComponent } from './articles/article-details/article-description/article-description.component';
import { ProfileComponent } from '../app/gitHubInfo/components/profile/profile.component';
import { FollowersComponent } from '../app/gitHubInfo/components/followers/followers.component';
import { ArticlesComponent } from './articles/articles.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from '../app/cars/car-details/car-details.component';


const routes: Routes=[
  // { path:'', component:  },  
  { path:'articles', component: ArticlesComponent },
  { path:'githubprofile', component: ProfileComponent },
  { path:'cars', component: CarsComponent },
  { path:'cars/:id', component: CarDetailsComponent }
  // { path:'**', component: AppComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ArticleDescriptionComponent,
    ProfileComponent,
    FollowersComponent,
    ArticlesComponent,
    CarsComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdListModule,
    MdGridListModule,
    MdSidenavModule,
    MdTabsModule
  ],
  providers: [ProfileService, FollowersService, CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
