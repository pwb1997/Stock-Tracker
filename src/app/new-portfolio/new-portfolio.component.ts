import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';

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
      this.http.post('/add-portfolio', f.value).subscribe(
        res => {
          console.log(res);
        },
        err => {
          alert('Session Error, Please Log in Again');
        }
      );
    }
  }
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

}
