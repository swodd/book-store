import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConst } from '../constants/app-const';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http:Http, private router: Router) { }

  sendCredentials(username: string, password: string){
    let url = this.serverPath + '/token';
    let encodedCredentials = btoa(usename + ":" + password);
    let basicHeader = "Basic " + encodedCredentials;
    let headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorisation' : basicHeader
    });

    return this.http.get(url, {headers: headers});
  }

  checkSession(){
    let url = this.serverPath + '/checkSession';
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

  logout(){
    et url = this.serverPath + '/user/logout';
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, '', {headers: headers});
  }

}