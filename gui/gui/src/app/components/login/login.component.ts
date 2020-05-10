import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    email: '',
    password: ''
  };

  statusMessage;

  _errorSubscription;

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
    this._errorSubscription = this.auth.errors.subscribe((data) => {
      this.statusMessage = data;
    });
    this.statusMessage = "";
  }

  ngOnDestroy() {
     this._errorSubscription.unsubscribe();
   }

  onFormSubmit(event, data) {
    event.preventDefault();
    this.auth.login(data);
  }

  changeFormValue(event) {
    this.loginForm[event.target.name] = event.target.value;
  }

  statusMessageClasses() {
    return {
      "status-message": true,
      "text-danger": true,
      "hidden": this.statusMessage == ""
    };
  }

}
