import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/iarticle';
import { Router } from '@angular/router';

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
  showReadMoreBtn = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onReadMore(id: number): void {
    this.router.navigate(['/details', id]);
  }
}
