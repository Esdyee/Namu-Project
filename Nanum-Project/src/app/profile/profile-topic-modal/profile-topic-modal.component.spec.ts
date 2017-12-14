import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTopicModalComponent } from './profile-topic-modal.component';

describe('ProfileTopicModalComponent', () => {
  let component: ProfileTopicModalComponent;
  let fixture: ComponentFixture<ProfileTopicModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTopicModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTopicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
