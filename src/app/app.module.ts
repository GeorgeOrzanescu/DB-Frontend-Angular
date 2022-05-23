import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticleComponent } from './components/article/article.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavComponent } from './components/nav/nav.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { ReadMoreBtnComponent } from './components/read-more-btn/read-more-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    DetailsPageComponent,
    HomePageComponent,
    ArticleComponent,
    ModalComponent,
    NavComponent,
    AddBtnComponent,
    ReadMoreBtnComponent,
    FooterComponent,
    QuoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
