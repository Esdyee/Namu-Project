import {
  Component, ViewChild, OnInit, OnDestroy, Input, Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { QuestionService } from '../../question-feed/question.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {
  @Input() answerMetaData;

  @Output() closed = new EventEmitter<boolean>();

  form: FormGroup;
  subscription: Subscription;
  content;


  constructor(fb: FormBuilder, private http: QuestionService) {
    this.form = fb.group({
      // TODO: add Validator
      editor: ['']
    });
  }
  @ViewChild('editor') editor: QuillEditorComponent;

  ngOnInit() {
    const observable$ = Observable.from(this.editor.onContentChanged);
    this.subscription = observable$.subscribe(
      data => {
        this.content = data;
      },
        error => console.log(error),
      () => console.log('done')
    );
    // auto draft save 전용 subscription
    this.editor
      .onContentChanged.debounceTime(300)
      .distinctUntilChanged()
      .subscribe(data => {
      });
  }

  ngOnDestroy() {
    console.log('destroyed');
    this.subscription.unsubscribe();
  }

  setFocus($event) {
    $event.focus();
  }

  saveContent() {
    const payload = {
      question: this.answerMetaData.pk,
      content: this.content.editor.getContents(),
      content_html: this.content.html,
      published: false
    };
    alert('임시저장되었습니다');
  }

  onSubmit() {
    const payload = {
      question: this.answerMetaData.pk,
      content: this.content.editor.getContents(),
      content_html: this.content.html,
      published: true
    };
    this.http.addAnswer(payload).subscribe(
      // TODO: repsonse로 완료 화면 그리기
      res => {
        this.closeEditor();
        console.log('done');
      },
        error => console.log(error)
    );
  }

  closeEditor() {
    this.closed.emit(false);
  }
}
