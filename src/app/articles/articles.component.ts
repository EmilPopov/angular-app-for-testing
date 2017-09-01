import { Component } from '@angular/core';
import { FakeData } from '../api/data';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  articles = FakeData.articles

  constructor() { }

}
