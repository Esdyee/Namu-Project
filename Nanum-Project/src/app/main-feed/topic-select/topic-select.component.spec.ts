import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSelectComponent } from './topic-select.component';

describe('TopicSelectComponent', () => {
  let component: TopicSelectComponent;
  let fixture: ComponentFixture<TopicSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
