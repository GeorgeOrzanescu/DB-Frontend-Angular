import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreBtnComponent } from './read-more-btn.component';

describe('ReadMoreBtnComponent', () => {
  let component: ReadMoreBtnComponent;
  let fixture: ComponentFixture<ReadMoreBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMoreBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
