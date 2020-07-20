import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profile: {
    username: 'admin12345'
    password: '12345678'
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(profileForm) {
    console.table(profileForm);
  }
}
