import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() selectArticle: EventEmitter<IArticle> =
    new EventEmitter<IArticle>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.article.content = this.getFirst1000Chars(this.article.content);
  }

  getFirst1000Chars = (text: string) => {
    return text.substring(0, 1000);
  };

  onReadMore(id: number): void {
    this.router.navigate(['/details', id]);
  }

  editArticle() {
    this.selectArticle.emit(this.article);
  }
}
