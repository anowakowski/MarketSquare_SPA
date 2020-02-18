import { ElementRef, EventEmitter, Component, OnInit, ViewChild, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SettingsService } from '../../services/settings.service';
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from 'rxjs/internal/Observable';
import { MatAutocompleteSelectedEvent } from '@angular/material';


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

  allTags: string[];
  filteredTags: string[];

  @ViewChild('subscribeNameInput', {static: false}) subscribeNameInput: ElementRef;
  @ViewChild('blacklistNameInput', {static: false}) blacklistNameInput: ElementRef;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.getBlacklistedTags();
    this.getSubscribedTags();
    this.getAllTags();
  }

  refreshFiltered() {
    this.filteredTags = this.allTags.filter(n => !this.subscribedTags.includes(n) && !this.blacklistedTags.includes(n));
  }

  getAllTags() {
    this.settingsService.getAllTags().then(response => {
      this.allTags = response.map(u => u.name);
      this.refreshFiltered();
    });
 }

  addSubscribedTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      const v = value.trim();
      if (this.filteredTags.indexOf(v) > -1) {
        this.subscribedTags.push(v);
        this.subscribeTag(v);
      } else {
        input.value = "";
      }
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
      const v = value.trim();
      if (this.filteredTags.indexOf(v) > -1) {
        this.blacklistedTags.push(v);
        this.blacklistTag(v);
      } else {
        input.value = "";
      }
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

  subscribeTag(tag: string) {
    if (this.blacklistedTags.indexOf(tag) < 0 && this.subscribedTags.indexOf(tag) < 0) {
      this.settingsService.subscribeTag(tag).then(response => {
        this.refresh();
      });
    }
  }

  blacklistTag(tag: string) {
    if (this.blacklistedTags.indexOf(tag) < 0 && this.subscribedTags.indexOf(tag) < 0) {
      this.settingsService.blacklistTag(tag).then(response => {
        this.refresh();
      });
    }
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
      this.refreshFiltered();
    });
  }

  getBlacklistedTags() {
    this.settingsService.getBlacklistedTags().then(response => {
      this.blacklistedTags = response;
      this.refreshFiltered();
    });
  }

  selectedSubscribedTag(event: MatAutocompleteSelectedEvent): void {
    this.subscribeTag(event.option.viewValue);
  }

  selectedBlacklistedTag(event: MatAutocompleteSelectedEvent): void {
    this.blacklistTag(event.option.viewValue);
  }
}
