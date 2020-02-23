import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Tag } from 'src/app/models/tag';
import { NoticeService } from './services/notice.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-notices",
  templateUrl: "./notices.component.html",
  styleUrls: ["./notices.component.css"]
})
export class NoticesComponent implements OnInit {
  constructor(private userService: UserService, private noticeService: NoticeService, public auth: AuthService) {}

  ngOnInit() {}

  getAllUsers() {
    this.userService.getAllUsers().then(response => {
      const users = response;
    });
  }

  selectedTagsChanged(currentTags: Tag[]) {
    this.noticeService.changeTags(currentTags);
  }
}
