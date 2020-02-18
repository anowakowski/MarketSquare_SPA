import { ElementRef, EventEmitter, Component, OnInit, ViewChild, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.css']
})
export class UserSubscriptionsComponent implements OnInit {
  subscribedUsers: string[];
  blacklistedUsers: string[];

  @ViewChild('subscribeNameInput', {static: false}) subscribeNameInput: ElementRef;
  @ViewChild('blacklistNameInput', {static: false}) blacklistNameInput: ElementRef;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.getBlacklistedUsers();
    this.getSubscribedUsers();
  }

  subscribeUser() {
    const subscribedUser = this.subscribeNameInput.nativeElement.value;
    this.settingsService.subscribeUser(subscribedUser);
  }

  blacklistUser() {
    const subscribedUser = this.blacklistNameInput.nativeElement.value;
    this.settingsService.blacklistUser(subscribedUser);
  }

  unsubscribeUser(username: string) {
    this.settingsService.unsubscribeUser(username);
  }

  unblacklistUser(username: string) {
    this.settingsService.unblacklistUser(username);
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
