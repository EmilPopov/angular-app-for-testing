import { Component, Output } from '@angular/core';
import { FakeData } from '../api/data';
import { Article } from '../models/article'

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {


  selectedArticle:Article;
  articles = FakeData.articles

  constructor() { }

}
