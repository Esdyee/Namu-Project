import { Component, OnInit } from '@angular/core';

interface Data {
  id: number;
  topic1: string;
  topic2: string;
  question: string;
}

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  datas: Data[];
  isShow = true;
  isChecked = false;
  isFollowing = false;
  constructor() { }

  ngOnInit() {
    this.datas = this.getDatas();
  }
  
  removeItem(id) {
    this.isShow = !this.isShow;
  }

  changeChecked() {
    this.isChecked = !this.isChecked;
  }

  following() {
    this.isFollowing = !this.isFollowing;
  }

  getDatas() {
    return [
      { id: 1, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' },
      { id: 2, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' },
      { id: 3, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' },
      { id: 4, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' },
      { id: 5, topic1: '토픽1', topic2: '토픽2', question: '페이스북 광고는 어떻게 시작하나요?' }
    ];
  }
}
