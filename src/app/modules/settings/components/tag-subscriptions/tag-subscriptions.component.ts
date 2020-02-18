import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: 'app-tag-subscriptions',
  templateUrl: './tag-subscriptions.component.html',
  styleUrls: ['./tag-subscriptions.component.css']
})
export class TagSubscriptionsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  subscribedTags: string[];
  blacklistedTags: string[];

  @ViewChild('subscribeNameInput', {static: false}) subscribeNameInput: ElementRef;
  @ViewChild('blacklistNameInput', {static: false}) blacklistNameInput: ElementRef;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.refresh();
  }

  addSubscribedTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      this.subscribedTags.push(value.trim());
      this.subscribeTag(value.trim());
    }

    if (input) {
      input.value = "";
    }
  }

  removeSubscribedTag(tag: string): void {
    const index = this.subscribedTags.indexOf(tag);

    if (index >= 0) {
      this.subscribedTags.splice(index, 1);
    }

    this.unsubscribeTag(tag);
  }

  addBlacklistedTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      this.blacklistedTags.push(value.trim());
      this.blacklistTag(value.trim());
    }

    if (input) {
      input.value = "";
    }
  }

  removeBlacklistedTag(tag: string): void {
    const index = this.blacklistedTags.indexOf(tag);

    if (index >= 0) {
      this.blacklistedTags.splice(index, 1);
    }

    this.unblacklistTag(tag);
  }

  refresh() {
    this.getBlacklistedTags();
    this.getSubscribedTags();
  }

  subscribeTag(tag: string) {
    this.settingsService.subscribeTag(tag).then(response => {
      this.refresh();
    });
  }

  blacklistTag(tag: string) {
    this.settingsService.blacklistTag(tag).then(response => {
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
