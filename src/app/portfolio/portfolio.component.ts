import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _document } from '@angular/platform-browser/src/browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  slugs = '';
  loggedin = 'false';
  stocks = [];
  constructor(private route: ActivatedRoute, private cookieService: CookieService, private http: HttpClient) { }

  ngOnInit() {
    this.slugs = this.route.snapshot.params['pslugs'];
    this.loggedin = this.cookieService.get('loggedin');
    if (this.loggedin === 'true') {
      this.http.get('/api/portfolios/' + this.slugs, { responseType: 'text' }).subscribe(
        res => {
          for (const each of JSON.parse(res)) {
            const stock = {} as any;
            stock.symbol = each.symbol;
            this.stocks.push(stock);
          }
          console.log(this.stocks);
        },
        err => {
          console.log(err);
        }
      )
    }
  }

}
