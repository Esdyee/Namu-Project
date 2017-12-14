import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// for type check
import { Question } from './question';
import { Answer } from '../main-feed/answer';

interface Questions {
  count: number;
  next: string;
  previous: string;
  results: Object[];
}

@Injectable()
export class QuestionService {

  HOST = 'https://siwon.me';
  private headers = new HttpHeaders()
    .set('Authorization', `Token ${JSON.parse(localStorage.currentUser).token}`);

  constructor(private http: HttpClient) { }


  // TODO: 동일 url로 method만 다르게 사용할 경우 endpoint까지 통일할까?
  getQuestions(page) {
    return this.http.get<Questions>(`${this.HOST}/post/question/?ordering=-created_at&page=${page}`,
      { headers: this.headers }); // TODO: parametrize
  }

  addQuestion(payload: Question) {
    return this.http.post(`${this.HOST}/post/question/`, payload,
      {headers: this.headers});
  }

  addAnswer(payload: Answer) {
    return this.http.post(`${this.HOST}/post/answer/`, payload,
      {headers: this.headers});
  }
}
