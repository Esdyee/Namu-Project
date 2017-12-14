import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, FormGroupName, NgForm, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';
import { AuthService } from '../auth.service';
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
        <mat-error *ngIf="emailError && !emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
          {{emailError}}
        </mat-error>
        <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
          이메일을 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
        <mat-error *ngIf="emailFormControl.hasError('required')">
          <strong>이메일 양식</strong>에 맞추어서 입력해주시기 바랍니다.
        </mat-error>
      </mat-form-field>
      
      <mat-form-field class="signup-full-width">
        <input type="password" matInput placeholder="Password" [formControl]="passwordFormControl"
                [errorStateMatcher]="matcher" #password>
        <mat-hint>비밀번호를 입력해주세요.</mat-hint>
        <mat-error *ngIf="passwordFormControl.hasError('required')">
          비밀번호를 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
      </mat-form-field>
      
      <mat-form-field class="signup-full-width">
        <input type="password" matInput placeholder="Password-conf" [formControl]="passwordConfFormControl"
                [errorStateMatcher]="matcher">
        <mat-hint>확인을 위해 비밀번호를 입력해주세요.</mat-hint>
        <mat-error *ngIf="passwordError && passwordConfFormControl.hasError('required')">
          {{passwordError}}
        </mat-error>
        <mat-error *ngIf="passwordConfFormControl.hasError('required')">
          비밀번호를 <strong>입력</strong>해 주시기 바랍니다.
        </mat-error>
      </mat-form-field>
      <button type="submit" class="btn-signup" mat-raised-button [disabled]="!signupForm.valid">회원가입</button>
      <!--<pre>{{ signupForm.value | json }}</pre>
      <pre>{{ signupForm.valid }}</pre>-->
    </form>

    
  </section>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  emailError: string = '';
  passwordError: string = '';
  
  constructor(private http: HttpClient, private path: AppService, private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.signup(this.emailFormControl.value, this.passwordFormControl.value
      , this.passwordConfFormControl.value, this.nameFormControl.value)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/main']);
        }
      }, err => {
        if (err.status == 400) {
          console.log(err);
        } 
      });
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'nameFormControl': new FormControl('', [
        Validators.required
      ]),
      'emailFormControl': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      // passwordGroup: new FormGroup({
      //   passwordFormControl: new FormControl('', Validators.required),
      //   passwordConfFormControl: new FormControl('', Validators.required)
      // })
      'passwordFormControl': new FormControl('', Validators.required),
      'passwordConfFormControl': new FormControl('', [Validators.required, this.match])        
    });
  }


  match(control:AbstractControl) {
    // 매개변수로 전달받은 검증 대상 폼 모델에서 password와 confirmPassword을 취득
      if(control.value != ''){
        //console.log('password1', control.parent.value.passwordFormControl);
        //console.log('password2', control.value);
        let password = control.parent.value.passwordFormControl
        const confirmPassword = control.value;

        // password와 confirmPassword의 값을 비교한다.
        if (password !== confirmPassword) {
          return { match: { password, confirmPassword } };
        } else {
          return null;
        }
      }
  }

  //Form Data Return
  get nameFormControl() {
    return this.signupForm.get('nameFormControl');
  }
  get passwordGroup() {
    return this.signupForm.get('passwordGroup');
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
