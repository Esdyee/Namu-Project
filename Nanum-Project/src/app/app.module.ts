import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { AnswerComponent } from './answer/answer.component';
import { AskModalComponent } from './common/navigator/ask-modal/ask-modal.component';
// import { MainLoginComponent } from './login/main-login/main-login.component';
// import { FindPasswordComponent } from './login/find-password/find-password.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { QuestionFeedComponent } from './question-feed/question-feed.component';
import { CommentsComponent } from './common/comments/comments.component';
import { EditorComponent } from './common/editor/editor.component';

import { TopicSelectComponent } from './main-feed/topic-select/topic-select.component';
import { NavTabComponent } from './common/nav-tab/nav-tab.component';
import { ProfileTopicModalComponent } from './profile/profile-topic-modal/profile-topic-modal.component';
import { QuestionService } from './question-feed/question.service';
import { MainFeedService } from './main-feed/main-feed.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    MainFeedComponent,
    ProfileComponent,
    NavigatorComponent,
    AskModalComponent,
    AnswerComponent,
    AskModalComponent,
    TopicSelectComponent,
    // MainLoginComponent,
    // FindPasswordComponent,
    NotFoundComponent,
    QuestionFeedComponent,
    CommentsComponent,
    EditorComponent,
    NavTabComponent,
    ProfileTopicModalComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
    AskModalComponent,
    TopicSelectComponent
  ],
  providers: [MainFeedService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
