import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/iarticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticle = {
    id: 0,
    title: '',
    tag: '',
    author: '',
    date: '',
    imgUrl: '',
    saying: '',
    content: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
