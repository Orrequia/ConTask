import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  credentials = {
      username: String,
      password: String
  };
  constructor(private http: HttpClient) {}

  ngOnInit() {};
  login() {
    this.http.post('http://localhost:3000/login', this.credentials).subscribe();
  }
}
