import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './module/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { MainFeedContentComponent } from './common/main-feed-content/main-feed-content.component';
import { NavigatorComponent } from './common/navigator/navigator.component';

// pipe
import { ImagePathPipe } from './pipe/image-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    MainFeedComponent,
    ProfileComponent,
    MainFeedContentComponent,
    NavigatorComponent,
    ImagePathPipe
  ],
  imports: [
    BrowserModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
