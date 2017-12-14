import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  //templateUrl: './login.component.html',
  template: `
    <div class="back-image">
      <div class="layer">
        <router-outlet></router-outlet>
      </div>  
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
