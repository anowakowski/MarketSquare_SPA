import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-notices",
  templateUrl: "./notices.component.html",
  styleUrls: ["./notices.component.css"]
})
export class NoticesComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}

  getAllUsers() {
    this.userService.getAllUsers().then(response => {
      const users = response;
    });
  }

  selectedTagsChanged(currentTags: string[]) {
    console.log('Tags changed: ' + JSON.stringify(currentTags));
  }
}
