import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTabComponent } from './nav-tab.component';

describe('NavTabComponent', () => {
  let component: NavTabComponent;
  let fixture: ComponentFixture<NavTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
