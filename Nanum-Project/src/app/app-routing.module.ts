import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login/login.guard';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
// 라우트에 해당되는 것이 없을 때 나타나는 페이지
import { NotFoundComponent } from './common/not-found/not-found.component';
import { QuestionFeedComponent } from './question-feed/question-feed.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { AnswerComponent } from './answer/answer.component';
import { EditorComponent } from './common/editor/editor.component';

// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: 'login/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainFeedComponent, canActivate: [LoginGuard]  },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
