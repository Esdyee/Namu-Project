import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  //templateUrl: './signup.component.html',
  template:`
    <section class="email-signup">
    <h1 class="tit-introduce">NANUM</h1>

    <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" novalidate class="signup-form">

      <mat-form-field class="signup-full-width">
        <input matInput placeholder="Name" [formControl]="nameFormControl"
               [errorStateMatcher]="matcher">
        <mat-hint>이름을 입력해주세요.</mat-hint>
        <mat-error *ngIf="nameFormControl.hasError('required')">
          <strong>이름</strong>을 입력해주시기 바랍니다.
        </mat-error>
      </mat-form-field>

      <mat-form-field class="signup-full-width">
        <input matInput placeholder="Email" [formControl]="emailFormControl"
               [errorStateMatcher]="matcher">
        <mat-hint>이메일을 입력해주세요.</mat-hint>
        <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
          이메일을 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
        <mat-error *ngIf="emailFormControl.hasError('required')">
          <strong>이메일 양식</strong>에 맞추어서 입력해주시기 바랍니다.
        </mat-error>
      </mat-form-field>

      <mat-form-field class="signup-full-width">
        <input matInput placeholder="Password" [formControl]="passwordFormControl"
               [errorStateMatcher]="matcher">
        <mat-hint>비밀번호를 입력해주세요.</mat-hint>
        <mat-error *ngIf="passwordFormControl.hasError('required')">
          비밀번호를 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
      </mat-form-field>
      
      <mat-form-field class="login-full-width">
        <input type="password" matInput placeholder="Password-conf" [formControl]="passwordConfFormControl"
               [errorStateMatcher]="matcher">
        <mat-hint>비밀번호를 입력해주세요.</mat-hint>
        <mat-error *ngIf="passwordFormControl.hasError('required')">
          비밀번호를 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
      </mat-form-field>
    </form>

    <button class="btn-signup" mat-raised-button routerLink="../main">회원가입</button>
  </section>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      nameFormControl: new FormControl('', [
        Validators.required
      ]),
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required
      ]),
      passwordConfFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  //Form Data Return
  get nameFormControl() {
    return this.signupForm.get('nameFormControl');
  }

  get emailFormControl() {
    return this.signupForm.get('emailFormControl');
  }

  get passwordFormControl() {
    return this.signupForm.get('passwordFormControl');
  }

  get passwordConfFormControl() {
    return this.signupForm.get('passwordConfFormControl');
  }
}
