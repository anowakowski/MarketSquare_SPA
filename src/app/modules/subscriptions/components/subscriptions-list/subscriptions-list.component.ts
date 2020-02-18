import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/models/Notice';

@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.css']
})
export class SubscriptionsListComponent implements OnInit {
  notices: Notice[];
  constructor() { }

  ngOnInit() {
    this.notices = [];
  }

  formatDate(date) {
    if (!date) {
      return '';
    }
    date = new Date(Date.parse(date));
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

}
