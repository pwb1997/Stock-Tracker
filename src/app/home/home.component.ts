import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _document } from '@angular/platform-browser/src/browser';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  name = '';
  loggedin = 'false';
  portfolios = [];
  constructor(private cookieService: CookieService, private http: HttpClient) { }
  ngOnInit() {
    this.name = this.cookieService.get('username');
    this.loggedin = this.cookieService.get('loggedin');
    if (this.loggedin === 'true') {
      this.http.get('/api/portfolios', { responseType: 'text' }).subscribe(
        res => {
          for (const each of JSON.parse(res)) {
            const portfolio = {} as any;
            portfolio.name = each.name;
            portfolio.colorTag = each.colorTag;
            this.portfolios.push(portfolio);
          }
        },
        err => {
          console.log(err);
        }
      )
    }
  }
}
