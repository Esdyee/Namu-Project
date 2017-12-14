import { Component, OnInit, Inject } from '@angular/core';
import { QuestionService } from '../../../question-feed/question.service';

import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';

class Question {
  content: string;
  topics: number[];
}

@Component({
  selector: 'app-ask-modal',
  templateUrl: './ask-modal.component.html',
  styleUrls: ['./ask-modal.component.css']
})
export class AskModalComponent {
  // for reactiveForm
  questionForm: FormGroup;
  question: Question;

  // for mat-topics only
  separatorKeyCodes = [ENTER];
  topics = [];

  constructor(
    public thisdialogRef: MatDialogRef<AskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private http: QuestionService) {

    this.questionForm = fb.group({
      content: [''],
      topics: [this.topics]
    });
  }

  onNoClick(): void {
    this.thisdialogRef.close();
  }

  add(e: MatChipInputEvent) {
    const input = e.input;
    const value = e.value;
    // add Topic topic
    if ((value || '').trim()) {
      this.topics.push(+value.trim());
    }
    // reset topics input
    if (input) {
      input.value = '';
    }
  }

  remove(topic: any): void {
    const index = this.topics.indexOf(topic);

    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }

  onSubmit() {
    this.http.addQuestion(this.questionForm.value)
      .subscribe(
        data => console.log(data),
      error => console.log(error)
    );
  }
}
