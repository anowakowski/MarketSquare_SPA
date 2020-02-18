import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { TagSubscriptionsComponent } from './components/tag-subscriptions/tag-subscriptions.component';
import { UserSubscriptionsComponent } from './components/user-subscriptions/user-subscriptions.component';



@NgModule({
  declarations: [SettingsComponent, TagSubscriptionsComponent, UserSubscriptionsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
