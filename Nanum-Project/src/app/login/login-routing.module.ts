import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { FindPasswordComponent } from './find-password/find-password.component';
import { LoginConnectComponent } from './login-connect/login-connect.component';
import { SignupComponent } from './signup/signup.component'
import { NotFoundComponent } from 'app/common/not-found/not-found.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent,
    children: [
        { path: 'main', component: MainLoginComponent },
        { path: 'find', component: FindPasswordComponent },
        { path: 'connect', component: LoginConnectComponent},
        { path: 'signup', component: SignupComponent },
        { path: '**', component: NotFoundComponent },
    ]
}];

@NgModule({
    /* 기능 모듈 단위 라우팅 설정  */
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
