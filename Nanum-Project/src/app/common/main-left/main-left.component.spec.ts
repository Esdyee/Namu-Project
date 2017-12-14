import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLeftComponent } from './main-left.component';

describe('MainLeftComponent', () => {
  let component: MainLeftComponent;
  let fixture: ComponentFixture<MainLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
