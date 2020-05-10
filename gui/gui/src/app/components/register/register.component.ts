import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordRepeat: ''
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
    if(data.passwordRepeat == data.password) {
      this.auth.register(data);
    } else {
      this.statusMessage = "Passwords don't match!";
    }
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
