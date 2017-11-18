import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _document } from '@angular/platform-browser/src/browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  name = '';
  loggedin = 'false';
  constructor(private cookieService: CookieService) { }
  ngOnInit() {
    this.name = this.cookieService.get('username');
    this.loggedin = this.cookieService.get('loggedin');
  }
}
