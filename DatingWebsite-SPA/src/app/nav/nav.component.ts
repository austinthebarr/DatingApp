import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ILogin } from '../interfaces/ILogin';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model = {} as ILogin;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Login was Successful');
    }, error => {
      console.log(error);
    }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('Token');
    return token === null ? false : true;
  }

  loggedOut() {
    localStorage.removeItem('Token');
    console.log('logged out');
  }

}
