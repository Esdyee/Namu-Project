import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FormGroup } from '@angular/forms'
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import 'rxjs/add/operator/map';

interface loginData {
  email:string;
  password: string;
}

interface signupData{
  name:string;
  email: string;
  password1: string;
  password2: string;
}

interface facebookData{
  accessToken:string;
  userid:string;
}

@Injectable()
export class AuthService {
  public token: string;
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http, private path:AppService) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  connect(api:string, category:string, data){
    let paylord = data

    return this.http.post(api, JSON.stringify(paylord)
      , { headers: this.headers })
      .map((response: Response) => {
        console.log("connect");
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store email and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  login(email: string, password: string): Observable<boolean> {
    let data:loginData = {email:email, password:password}
    return this.connect(this.path.api_path + "user/login/", 'login',  data);
  }

  signup(email: string, password: string, password2: string, name: string): Observable<boolean>{
    let data: signupData = { email : email, password1 : password, password2 : password2, name : name}
    
    return this.connect(this.path.api_path + "user/signup/", 'signup', data);
  }

  facebooklogin(accessToken: string, userid: string, connectFunc){
    console.log(accessToken);
    let data:facebookData = {accessToken:accessToken, userid:userid}
    return connectFunc("https://siwon.me/user/facebook/", 'facebook', data);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
