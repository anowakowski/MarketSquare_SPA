import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-tag-subscriptions',
  templateUrl: './tag-subscriptions.component.html',
  styleUrls: ['./tag-subscriptions.component.css']
})
export class TagSubscriptionsComponent implements OnInit {

  subscribedTags: string[];
  blacklistedTags: string[];

  @ViewChild('subscribeNameInput', {static: false}) subscribeNameInput: ElementRef;
  @ViewChild('blacklistNameInput', {static: false}) blacklistNameInput: ElementRef;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.getBlacklistedTags();
    this.getSubscribedTags();
  }

  subscribeTag() {
    const subscribedTag = this.subscribeNameInput.nativeElement.value;
    this.settingsService.subscribeTag(subscribedTag).then(response => {
      this.refresh();
    });
  }

  blacklistTag() {
    const subscribedTag = this.blacklistNameInput.nativeElement.value;
    this.settingsService.blacklistTag(subscribedTag).then(response => {
      this.refresh();
    });
  }

  unsubscribeTag(tag: string) {
    this.settingsService.unsubscribeTag(tag).then(response => {
      this.refresh();
    });
  }

  unblacklistTag(tag: string) {
    this.settingsService.unblacklistTag(tag).then(response => {
      this.refresh();
    });
  }

  getSubscribedTags() {
    this.settingsService.getSubscribedTags().then(response => {
      this.subscribedTags = response;
    });
  }

  getBlacklistedTags() {
    this.settingsService.getBlacklistedTags().then(response => {
      this.blacklistedTags = response;
    });
  }

}
