import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    constructor(private appService: AppService) { }

    ngOnInit() {
    }
    loggedIn() {
      return this.appService.loggedIn();
    }


}
