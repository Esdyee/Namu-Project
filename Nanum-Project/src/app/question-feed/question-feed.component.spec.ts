import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFeedComponent } from './question-feed.component';

describe('QuestionFeedComponent', () => {
  let component: QuestionFeedComponent;
  let fixture: ComponentFixture<QuestionFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
