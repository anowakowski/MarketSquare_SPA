import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { NoticeService } from "src/app/services/notice.service";

@Component({
  selector: "app-notices",
  templateUrl: "./notices.component.html",
  styleUrls: ["./notices.component.css"]
})
export class NoticesComponent implements OnInit {
  constructor(private userService: UserService, private noticeService: NoticeService) {}

  ngOnInit() {}

  getAllUsers() {
    this.userService.getAllUsers().then(response => {
      const users = response;
    });
  }

  getAllNotices() {
    this.noticeService.getAllNotices().then(response => {
      const notices = response;
      console.log(notices);
    });
  }
  
  selectedTagsChanged(currentTags: string[]) {
    console.log('Tags changed: ' + JSON.stringify(currentTags));

  }
}
