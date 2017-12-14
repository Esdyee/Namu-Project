import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription;
  content;

  constructor(fb: FormBuilder) {
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
        console.log(data);
        this.content = data;
      },
        error => console.log(error),
      () => console.log('done')
    );
    this.editor
      .onContentChanged.debounceTime(300) // 추후 자동저장 구현 시..
      .distinctUntilChanged()
      .subscribe(data => {
        console.log(JSON.stringify(data.editor.getContents()));
        // console.log('view child + directly subscription', data);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setFocus($event) {
    $event.focus();
  }

  getContent() {
  }

  onSubmit() {
    console.log(this.content);
  }

}
