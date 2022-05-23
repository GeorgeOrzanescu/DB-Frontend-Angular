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

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isModalOpen: boolean;
  @Output() toggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  articleForm = new FormGroup({});

  addArticleSubscription = new Subscription();
  constructor(private dataService: DataService) {
    this.isModalOpen = false;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (true) {
      this.articleForm = new FormGroup({
        title: new FormControl(''),
        tag: new FormControl(''),
        author: new FormControl(''),
        date: new FormControl(''),
        imgUrl: new FormControl(''),
        content: new FormControl(''),
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
  }

  onSubmit() {
    const body = this.articleForm.getRawValue();
    this.addArticleSubscription = this.dataService
      .postArticleData(body)
      .subscribe((resp) => {
        this.closeModal();
      });
    location.reload();
  }
}
