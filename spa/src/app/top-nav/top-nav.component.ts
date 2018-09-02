import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  model: any = {};
  userName = '';
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.userName = this.appService.decodedToken.sub;
  }
  login() {
    console.log(this.model);
    this.appService.login(this.model)
      .subscribe(response => {
        this.model.password = '';
        this.appService.showSuccess('Logged in successfully');
      }, error => {
        this.appService.showError(error);
      });
  }
  logout() {
    this.appService.logOut();
    this.router.navigateByUrl('/home');
    this.appService.showMessage('Logged out');
  }
  loggedIn() {
    return this.appService.loggedIn();
  }
}
