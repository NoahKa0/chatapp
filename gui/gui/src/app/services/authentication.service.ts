import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token:string;

  baseUrl:string = "http://noahk.ddns.net/Websites/chatapp/api/";

  errors: Subject<string> = new Subject<string>();

  constructor(private http:HttpClient, private router:Router) { }

  login(data) {
    this.http.post(this.baseUrl + "login.php", data).subscribe((response:any) => {
      if(response.status !== "success") {
        this.errors.next(response.message);
      } else {
        sessionStorage.setItem('userToken', response.token);
        sessionStorage.setItem('websocketUrl', response.websocket);
        this.router.navigate(['chat']);
      }
    });
  }

  register(data) {
    this.http.post(this.baseUrl + "register.php", data).subscribe((response:any) => {
      if(response.status !== "success") {
        this.errors.next(response.message);
      } else {
        this.login({
          email: data.email,
          password: data.password
        });
      }
    });
  }

}
