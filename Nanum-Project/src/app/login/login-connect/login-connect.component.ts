import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-connect',
  //templateUrl: './login-connect.component.html',
  template: `
  <section class="email-login">
    <h1 class="tit-introduce">NANUM</h1>

    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate class="login-form">
      <mat-form-field class="login-full-width">
        <input matInput placeholder="Email" [formControl]="emailFormControl"
               [errorStateMatcher]="matcher">
        <mat-hint>이메일을 입력해주세요.</mat-hint>
        
        <mat-error *ngIf="emailError && !emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
          {{emailError}}
        </mat-error>
        <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
          <strong>이메일 양식</strong>에 맞추어서 입력해주시기 바랍니다.
        </mat-error>
        <mat-error *ngIf="emailFormControl.hasError('required')">
          이메일을 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
      </mat-form-field>

      <mat-form-field class="login-full-width">
        <input type="password" matInput placeholder="Password" [formControl]="passwordFormControl"
               [errorStateMatcher]="matcher" (keyup.enter)="onSubmit()">
        <mat-hint>비밀번호를 입력해주세요.</mat-hint>
        <mat-error *ngIf="passwordError && passwordFormControl.hasError('required')">
          {{passwordError}}
        </mat-error>
        <mat-error *ngIf="!passwordError && passwordFormControl.hasError('required')">
          비밀번호를 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
      </mat-form-field>
      <button type="submit" class="btn-login" mat-raised-button 
      [disabled]="!(emailFormControl.valid && passwordFormControl.valid)">로그인</button>
    </form>
    
  </section>
  `,
  styleUrls: ['./login-connect.component.css']
})
export class LoginConnectComponent implements OnInit {
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  emailError:string = '';
  passwordError:string = '';

  constructor(private http: HttpClient, private path: AppService, private auth: AuthService, private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required,
      ])
    });
  }

  onSubmit(){
    this.auth.login(this.emailFormControl.value, this.passwordFormControl.value)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/main']);
        } 
      }, err => {
        if(err.status == 400){
          console.log(400)
          //이메일 validation
          this.emailError = JSON.parse(err._body).email[0];
        } else{
          console.log(401)
          console.log(err)
          //this.error = JSON.parse(err._body)
          console.log(err._body);
          this.passwordError = JSON.parse(err._body).error;
          this.loginForm.patchValue({ passwordFormControl: "" })
        }
      });
  }

  //Form Data Return
  get emailFormControl() {
    return this.loginForm.get('emailFormControl');
  }

  get passwordFormControl() {
    return this.loginForm.get('passwordFormControl');
  }

}
