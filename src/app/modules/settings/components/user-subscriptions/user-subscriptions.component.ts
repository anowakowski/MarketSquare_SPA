import { ElementRef, EventEmitter, Component, OnInit, ViewChild, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.css']
})
export class UserSubscriptionsComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
  }

  subscribeUser() {
    const subscribedUser = this.nameInput.nativeElement.value;
    this.settingsService.subscribeUser(subscribedUser);
  }

}
