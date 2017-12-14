import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private navRoute: Router) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.navRoute.navigate(['/main']);
    }
  }

  findPassword(){
    this.navRoute.navigate(['find']);
  }

}
