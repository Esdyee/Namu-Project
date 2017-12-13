import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Answers {
  count: number;
  next: string;
  previous: string;
  results: Object[];
}

@Injectable()
export class MainFeedService {

  HOST = 'https://siwon.me';
  private headers = new HttpHeaders()
    .set('Authorization', `Token ${JSON.parse(localStorage.currentUser).token}`);

  constructor(private http: HttpClient) { }

  getAnswers(page) {
    return this.http.get<Answers>(`${this.HOST}/post/answer/?ordering=-created_at&page=${page}`,
      { headers: this.headers });
  }
}
