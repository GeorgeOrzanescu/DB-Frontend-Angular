import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/iarticle';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private DataService: DataService) {}

  articlesData: IArticle[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.DataService.getArticlesData().subscribe((resp) => {
      this.articlesData = resp;
      this.isLoading = false;
    });
  }
}
