import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() isModalOpen: boolean;
  @Output() toggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {
    this.isModalOpen = false;
  }

  ngOnInit(): void {}

  closeModal() {
    this.isModalOpen = false;
    this.toggleModal.emit(this.isModalOpen);
  }
}
