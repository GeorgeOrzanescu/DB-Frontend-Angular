import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IArticle } from 'src/app/models/iarticle';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isModalOpen: boolean;
  @Output() toggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() resetArticleForm: EventEmitter<string> = new EventEmitter<string>();
  @Input() articleSelected: IArticle = {
    id: 0,
    title: '',
    tag: '',
    author: '',
    date: '',
    imgUrl: '',
    saying: '',
    content: '',
  };
  articleForm = new FormGroup({});

  addArticleSubscription = new Subscription();
  constructor(private dataService: DataService) {
    this.isModalOpen = false;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (true) {
      this.articleForm = new FormGroup({
        title: new FormControl(this.articleSelected.title),
        tag: new FormControl(this.articleSelected.tag),
        author: new FormControl(this.articleSelected.author),
        date: new FormControl(this.articleSelected.date),
        imgUrl: new FormControl(this.articleSelected.imgUrl),
        content: new FormControl(this.articleSelected.content),
      });
    }
  }

  ngOnDestroy(): void {
    this.isModalOpen = false;
    this.addArticleSubscription.unsubscribe();
  }

  closeModal() {
    this.isModalOpen = false;
    this.toggleModal.emit(this.isModalOpen);
    this.resetArticleForm.emit('');
  }

  onSubmit() {
    const body = this.articleForm.getRawValue();
    this.addArticleSubscription = this.dataService
      .postArticleData(body)
      .subscribe((resp) => {
        this.closeModal();
      });
    this.resetArticleForm.emit('');
    location.reload();
  }

  updateArticle() {
    const body = {
      ...this.articleForm.getRawValue(),
      id: this.articleSelected.id,
    };
    this.addArticleSubscription = this.dataService
      .putArticleData(body)
      .subscribe((response) => {
        console.log(response);
        this.resetArticleForm.emit('');
        this.closeModal();
        location.reload();
      });
  }
}
