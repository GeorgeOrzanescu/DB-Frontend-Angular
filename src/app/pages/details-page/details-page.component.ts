import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from 'src/app/models/iarticle';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  articleId: number;
  article: IArticle = {
    id: 0,
    title: '',
    tag: '',
    author: '',
    date: '',
    imgUrl: '',
    saying: '',
    content: '',
  };

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.articleId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.dataService.getArticleData(this.articleId).subscribe((resp) => {
      this.article = resp;
    });
  }
}
