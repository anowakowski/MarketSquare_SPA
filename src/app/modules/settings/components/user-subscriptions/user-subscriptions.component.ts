import { ElementRef, EventEmitter, Component, OnInit, ViewChild, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SettingsService } from '../../services/settings.service';
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from 'rxjs/internal/Observable';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.css']
})
export class UserSubscriptionsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  subscribedUsers: string[];
  blacklistedUsers: string[];

  allUsers: string[];
  filteredUsers: string[];

  @ViewChild('subscribeNameInput', {static: false}) subscribeNameInput: ElementRef;
  @ViewChild('blacklistNameInput', {static: false}) blacklistNameInput: ElementRef;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.getBlacklistedUsers();
    this.getSubscribedUsers();
    this.getAllUsers();
  }

  refreshFiltered() {
    this.filteredUsers = this.allUsers.filter(n => !this.subscribedUsers.includes(n) && !this.blacklistedUsers.includes(n));
  }

  getAllUsers() {
    this.settingsService.getAllUsers().then(response => {
      this.allUsers = response.map(u => u.username);
      this.refreshFiltered();
    });
 }

  addSubscribedUser(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      const v = value.trim();
      if (this.filteredUsers.indexOf(v) > -1) {
        this.subscribedUsers.push(v);
        this.subscribeUser(v);
      } else {
        input.value = "";
      }
    }

    if (input) {
      input.value = "";
    }
  }

  removeSubscribedUser(user: string): void {
    const index = this.subscribedUsers.indexOf(user);

    if (index >= 0) {
      this.subscribedUsers.splice(index, 1);
    }

    this.unsubscribeUser(user);
  }

  addBlacklistedUser(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      const v = value.trim();
      if (this.filteredUsers.indexOf(v) > -1) {
        this.blacklistedUsers.push(v);
        this.blacklistUser(v);
      } else {
        input.value = "";
      }
    }

    if (input) {
      input.value = "";
    }
  }

  removeBlacklistedUser(user: string): void {
    const index = this.blacklistedUsers.indexOf(user);

    if (index >= 0) {
      this.blacklistedUsers.splice(index, 1);
    }

    this.unblacklistUser(user);
  }

  subscribeUser(user: string) {
    if (this.blacklistedUsers.indexOf(user) < 0 && this.subscribedUsers.indexOf(user) < 0) {
      this.settingsService.subscribeUser(user).then(response => {
        this.refresh();
      });
    }
  }

  blacklistUser(user: string) {
    if (this.blacklistedUsers.indexOf(user) < 0 && this.subscribedUsers.indexOf(user) < 0) {
      this.settingsService.blacklistUser(user).then(response => {
        this.refresh();
      });
    }
  }

  unsubscribeUser(username: string) {
    this.settingsService.unsubscribeUser(username).then(response => {
      this.refresh();
    });
  }

  unblacklistUser(username: string) {
    this.settingsService.unblacklistUser(username).then(response => {
      this.refresh();
    });
  }

  getSubscribedUsers() {
    this.settingsService.getSubscribedUsers().then(response => {
      this.subscribedUsers = response;
      this.refreshFiltered();
    });
  }

  getBlacklistedUsers() {
    this.settingsService.getBlacklistedUsers().then(response => {
      this.blacklistedUsers = response;
      this.refreshFiltered();
    });
  }

  selectedSubscribedUser(event: MatAutocompleteSelectedEvent): void {
    this.subscribeUser(event.option.viewValue);
  }

  selectedBlacklistedUser(event: MatAutocompleteSelectedEvent): void {
    this.blacklistUser(event.option.viewValue);
  }

}
