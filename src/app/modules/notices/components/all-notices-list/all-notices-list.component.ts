import { Component, OnInit } from "@angular/core";

import { NoticeService } from '../../services/notice.service';
import { Notice } from 'src/app/models/Notice';

@Component({
  selector: "app-all-notices-list",
  templateUrl: "./all-notices-list.component.html",
  styleUrls: ["./all-notices-list.component.css"]
})
export class AllNoticesListComponent implements OnInit {
  notices: Notice[];
  constructor(private noticeService: NoticeService) {
    this.fillNotices();
  }

  ngOnInit() {
    this.getAllNotices();
  }

  getAllNotices() {
    this.noticeService.getAllNotices().then(response => {
      const noticesTest = response;
      console.log(noticesTest);
    });
  }
  fillNotices() {

  }
  formatDate(date) {
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
