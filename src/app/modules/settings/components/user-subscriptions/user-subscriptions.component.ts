import { ElementRef, EventEmitter, Component, OnInit, ViewChild, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SettingsService } from '../../services/settings.service';
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";

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

  @ViewChild('subscribeNameInput', {static: false}) subscribeNameInput: ElementRef;
  @ViewChild('blacklistNameInput', {static: false}) blacklistNameInput: ElementRef;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.getBlacklistedUsers();
    this.getSubscribedUsers();
  }

  addSubscribedUser(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      this.subscribedUsers.push(value.trim());
      this.subscribeUser(value.trim());
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
      this.blacklistedUsers.push(value.trim());
      this.blacklistUser(value.trim());
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
    this.settingsService.subscribeUser(user).then(response => {
      this.refresh();
    });
  }

  blacklistUser(user: string) {
    this.settingsService.blacklistUser(user).then(response => {
      this.refresh();
    });
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
    });
  }

  getBlacklistedUsers() {
    this.settingsService.getBlacklistedUsers().then(response => {
      this.blacklistedUsers = response;
    });
  }

}
