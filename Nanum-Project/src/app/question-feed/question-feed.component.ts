import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

// typings
import { Question } from './question';

@Component({
  selector: 'app-question-feed',
  templateUrl: './question-feed.component.html',
  styleUrls: ['./question-feed.component.css']
})
export class QuestionFeedComponent implements OnInit {
  isEditMode = false;
  answerHeader;

  questions = [];
  currentPage = 1;

  constructor(private http: QuestionService) { }

  ngOnInit() {
    this.getNextPage();
  }

  negativeFeedback(pk) {
    console.log(pk);
  }

  getNextPage() {
    this.http.getQuestions(this.currentPage).subscribe(
      res => {
        this.questions = [...this.questions, ...res.results];
        // TODO: 임시 페이지네이션 기능... 뭔가 스마트한 방법으로 바꿔야함...
        this.currentPage += 1;
        console.log(this.questions);
      },
      error => {
        console.log(error);
      }
    );
  }

  openEditor(question) {
    this.answerHeader = {
      pk: question.pk,
      content: question.content
    };
    this.isEditMode = !this.isEditMode;
  }

  closeEditor(e) { // false value from editor component
    this.isEditMode = e;
  }
}
