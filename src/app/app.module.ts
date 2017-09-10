import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
   MdButtonModule,
   MdCheckboxModule,
   MdListModule,
   MdGridListModule
  } from '@angular/material';

// services
import { ProfileService } from "../app/gitHubInfo/services/profile.service";
import { FollowersService } from "../app/gitHubInfo/services/followers.service";

//components
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticleDescriptionComponent } from './articles/article-details/article-description/article-description.component';
import { ProfileComponent } from '../app/gitHubInfo/components/profile/profile.component';
import { FollowersComponent } from '../app/gitHubInfo/components/followers/followers.component';




@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    ArticleDescriptionComponent,
    ProfileComponent,
    FollowersComponent
    
  

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdListModule,
    MdGridListModule
  ],
  providers: [ProfileService, FollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
