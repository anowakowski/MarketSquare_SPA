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

  checked(tagName: string) {
    console.log('Checked tag: ' + tagName);
  }

  unchecked(tagName: string) {
    console.log('Unchecked tag: ' + tagName);
  }
}
