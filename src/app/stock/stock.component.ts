import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _document } from '@angular/platform-browser/src/browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StockComponent implements OnInit {
  pslugs = '';
  sslugs = '';
  loggedin = '';
  stock = {} as any;
  constructor(private route: ActivatedRoute, private cookieService: CookieService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.pslugs = this.route.snapshot.params['pslugs'];
    this.sslugs = this.route.snapshot.params['sslugs'];
    this.loggedin = this.cookieService.get('loggedin');
    if (this.loggedin === 'true') {
      this.http.get('/api/stocks/' + this.pslugs + '/' + this.sslugs, { responseType: 'text' }).subscribe(
        res => {
          this.stock = JSON.parse(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}