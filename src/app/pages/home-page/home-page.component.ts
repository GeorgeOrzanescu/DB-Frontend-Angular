import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/models/iarticle';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private DataService: DataService) {
    this.getArticlesData();
  }

  articlesData: IArticle[] = [];
  isLoading = false;
  articlesSubscription = new Subscription();
  isModalOpen = false;

  articlesDisplayed: IArticle[] = [];
  numberOfArticles = 3;
  startIndex = 0;
  endIndex = 0 + this.numberOfArticles - 1;

  articleSelected: IArticle = {
    id: 0,
    title: '',
    tag: '',
    author: '',
    date: '',
    imgUrl: '',
    saying: '',
    content: '',
  };

  ngOnInit(): void {}

  getArticlesData(): void {
    this.isLoading = true;
    this.articlesSubscription = this.DataService.getArticlesData().subscribe(
      (resp) => {
        this.articlesData = resp;
        this.articlesDisplayed = resp.filter(
          (d, i) => i >= this.startIndex && i <= this.endIndex
        );
        this.isLoading = false;
      }
    );
  }

  ngONDestroy(): void {
    this.articlesSubscription.unsubscribe();
  }

  openModal() {
    this.isModalOpen = true;
  }

  toggleModal(modalState: boolean): void {
    this.isModalOpen = modalState;
  }

  prevPage() {
    if (this.startIndex - this.numberOfArticles >= 0) {
      this.startIndex = this.startIndex - this.numberOfArticles;
      this.endIndex = this.endIndex - this.numberOfArticles;
      this.articlesDisplayed = this.articlesData.filter(
        (d, i) => i >= this.startIndex && i <= this.endIndex
      );
    }
  }

  nextPage() {
    if (this.startIndex + this.numberOfArticles <= this.articlesData.length) {
      this.startIndex = this.startIndex + this.numberOfArticles;
      this.endIndex = this.endIndex + this.numberOfArticles;
      this.articlesDisplayed = this.articlesData.filter(
        (d, i) => i >= this.startIndex && i <= this.endIndex
      );
    }
  }

  selectArticle(selectArticle: IArticle) {
    this.articleSelected = selectArticle;
    this.openModal();
  }

  resetArticleForm() {
    this.articleSelected = {
      id: 0,
      title: '',
      tag: '',
      author: '',
      date: '',
      imgUrl: '',
      saying: '',
      content: '',
    };
  }
}
