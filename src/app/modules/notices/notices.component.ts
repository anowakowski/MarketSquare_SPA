import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getAllUsers() {
    this.userService.getAllUsers().then(response => {
      const users = response;
      console.log(JSON.stringify(users));
    });
  }

  selectedTagsChanged(selectedTags: string[]) {
    console.log('Selected tags changed: ' + JSON.stringify(selectedTags));
  }
}
