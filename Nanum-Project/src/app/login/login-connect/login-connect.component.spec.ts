import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginConnectComponent } from './login-connect.component';

describe('LoginConnectComponent', () => {
  let component: LoginConnectComponent;
  let fixture: ComponentFixture<LoginConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
