import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  api_path = 'https://siwon.me/';
  test_user_data: object;
  constructor() { }
}
