import { Component, OnInit } from "@angular/core";
import { Notice } from "src/app/models/Notice";
import { NoticeService } from '../../services/notice.service';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: "app-all-notices-list",
  templateUrl: "./all-notices-list.component.html",
  styleUrls: ["./all-notices-list.component.css"]
})
export class AllNoticesListComponent implements OnInit {
  notices: Notice[];
  selectedTags: Tag[];

  constructor(private noticeService: NoticeService) {
    this.fillNotices();
  }

  ngOnInit() {
    this.subscribeIncomingTags();
    this.getAllNotices();
  }

  getAllNotices() {
    this.noticeService.getAllNotices().then(response => {
      this.notices = response;
    });
  }

  subscribeIncomingTags() {
    this.noticeService.currentTags.subscribe(incomingTags => this.handleIncomingTags(incomingTags));
  }

  handleIncomingTags(incomingTags: Tag[]) {
    this.selectedTags = incomingTags;
  }

  fillNotices() {

  }

  formatDate(date) {
    //#TODO Actually format date ;)
    if(!date){
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
