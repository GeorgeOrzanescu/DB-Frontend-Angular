import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticle } from 'src/app/models/iarticle';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

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

  articlesSubscription = new Subscription();

  constructor(private router: Router, private dataService: DataService) {}

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

  deleteArticle() {
    this.articlesSubscription = this.dataService
      .deleteArticleData(this.article.id)
      .subscribe((response) => {
        location.reload();
      });
  }
}
