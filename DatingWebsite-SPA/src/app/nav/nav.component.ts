import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ILogin } from '../interfaces/ILogin';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model = {} as ILogin;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Login was Successful');
    }, error => {
      this.alertify.error(error);
    }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('Token');
    return token === null ? false : true;
  }

  loggedOut() {
    localStorage.removeItem('Token');
    this.alertify.message('logged out');
  }

}
