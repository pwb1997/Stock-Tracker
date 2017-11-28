import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewPortfolioComponent implements OnInit {
  validation = 'eg. Portfolio 1';
  color = 'white';
  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.validation = 'Please input a Valid Name!';
      this.color = '#ff9292';
    } else {
      f.value.color = f.value.color || 'white';
      this.http.post('/add-portfolio', f.value, { responseType: 'text' }).subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl('/home')
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
  }

}
