import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPasswordComponent } from './find-password.component';

describe('FindPasswordComponent', () => {
  let component: FindPasswordComponent;
  let fixture: ComponentFixture<FindPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
