import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login/login.guard';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

import { ProfileComponent } from './profile/profile.component';
// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: 'login/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [LoginGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    LoginModule,
    MainModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
