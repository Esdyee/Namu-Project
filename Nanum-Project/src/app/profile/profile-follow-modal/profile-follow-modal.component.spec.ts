import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowModalComponent } from './profile-follow-modal.component';

describe('ProfileFollowModalComponent', () => {
  let component: ProfileFollowModalComponent;
  let fixture: ComponentFixture<ProfileFollowModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFollowModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFollowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
