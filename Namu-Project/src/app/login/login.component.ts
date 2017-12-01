import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  //templateUrl: './login.component.html',
  template: `
  <app-main-login></app-main-login>
  Test
  Chankyu
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
