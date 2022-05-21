import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() isModalOpen: boolean;

  constructor() {
    this.isModalOpen = false;
  }

  ngOnInit(): void {}
}
