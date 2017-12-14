import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ProfileTopicModalComponent } from './profile-topic-modal/profile-topic-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  // TEST_DUMMY_USER_DATA ---> 페이지 구성 각 부분별로 API가 있다.
  DUMMY_USER_PROFILE = {
    Name: '김경훈',
    Article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.',
    Resume: [
      { pk: 1, type: 'Job', content: '지식서비스 Nanum Founder' },
      { pk: 2, type: 'Job', content: '대통령' },
      { pk: 3, type: 'School', content: '성균관대학교' },
      { pk: 4, type: 'School', content: '서울고등학교' }
    ],
    Activity: {
      Answer_View: '555',
      Answers: '1,400',
      Stars: '77,777',
      Follow: '100',
      Follower: '200'
    },
    Interest: [
      { pk: 1, type: 'Interest', content: 'Interest-test0' },
      { pk: 2, type: 'Interest', content: 'Interest-test1' },
      { pk: 3, type: 'Interest', content: 'Interest-test2' },
      { pk: 4, type: 'Interest', content: 'Interest-test3' },
      { pk: 5, type: 'Interest', content: 'Interest-test4' },
      { pk: 6, type: 'Interest', content: 'Interest-test5' },
      { pk: 7, type: 'Interest', content: 'Interest-test6' },
      { pk: 8, type: 'Interest', content: 'Interest-test7' }
    ],

    Experts: [
      { pk: 1, type: 'Experts', content: 'Experts-test0' },
      { pk: 2, type: 'Experts', content: 'Experts-test1' },
      { pk: 3, type: 'Experts', content: 'Experts-test2' },
      { pk: 4, type: 'Experts', content: 'Experts-test3' },
      { pk: 5, type: 'Experts', content: 'Experts-test4' },
      { pk: 6, type: 'Experts', content: 'Experts-test5' },
      { pk: 7, type: 'Experts', content: 'Experts-test6' },
      { pk: 8, type: 'Experts', content: 'Experts-test7' }
    ]
  };

  constructor(public dialog: MatDialog) { }




  // Test Logic

  userArticle: string;
  userResume: object;
  isArticleOvered: boolean;
  isClicked: boolean;
  isSignIn: boolean;
  // 사진 업로드 테스트!
  dataUrl: any[] = [];
  // 하단부 사진 컨테이너
  interestContainer: any[] = [];
  expertContainer: any[] = [];

  // 테스팅 페이지 조작 로직
  TEST_userName: string;
  TEST_userArticle: string;


  ngOnInit() {
    this.userArticle = this.DUMMY_USER_PROFILE.Article;
    this.userResume = this.DUMMY_USER_PROFILE.Resume;
    this.isArticleOvered = false;
    this.isClicked = false;
    this.isSignIn = true; // 추후에 로그인 관련 컴포넌트가 개발 완료되면 기본값으로 false를 부여할 예정
    // 하단부 테스트
    this.interestContainer = [...this.DUMMY_USER_PROFILE.Interest];
    this.expertContainer = [...this.DUMMY_USER_PROFILE.Experts];
    // 테스팅 페이지 조작용
    this.TEST_userName = '';
    this.TEST_userArticle = '';
  }

  // 사진 업로드 테스트!
  readUrl(event) {
    const reader = new FileReader();
    reader.onload = (loadEvent: any) => {
      this.dataUrl.push(loadEvent.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }



  getUserName(): string {
    return this.DUMMY_USER_PROFILE.Name;
  }

  getUserArticle(): string {
    // this.userArticle = this.DUMMY_UserArticle;
    const _userArticle = this.DUMMY_USER_PROFILE.Article;

    // is Article.length > 200 ?
    // if (this.DUMMY_USER_PROFILE.Article.length > 200) {
    //   const _userArticle_COPY: string[] = _userArticle.slice(0, 200);

    //   this.isArticleOvered = true;
    //   return _userArticle_COPY;
    // }
    return _userArticle;
  }

  toggleShowArticle() {
    this.isClicked = !this.isClicked;
  }

  // 여기까지 상단

  getUserResumeIcon(resume) {
    switch (resume) {
      case 'Job':
        return 'business_center';
      case 'School':
        return 'school';
    }
  }

  // 여기까지 중단






  // 테스트 조작용 로직
  TEST_modifyUserName() {
    if (this.TEST_userName) {
      this.DUMMY_USER_PROFILE.Name = this.TEST_userName;
      this.TEST_userName = '';
    }
  }

  TEST_modifyUserArticle() {
    if (this.TEST_userArticle) {
      this.userArticle = this.TEST_userArticle;
      this.DUMMY_USER_PROFILE.Article = this.TEST_userArticle;
      this.TEST_userArticle = '';
    }
  }
  
  openProfileTopicModal(): void {
    const dialogRef = this.dialog.open(ProfileTopicModalComponent, {
      width: '620px',
      // 이름 참조해서 사용
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}