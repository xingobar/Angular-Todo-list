import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date = '';

  constructor() { }

  ngOnInit() {
  }

  getDate() {
     (setInterval(() => {
      const date = new Date();
      this.date = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + ' ' + date.getHours() + ': ' + date.getMinutes() + ' : ' + date.getSeconds();
    }, 1000));
    return this.date;
  }
}
