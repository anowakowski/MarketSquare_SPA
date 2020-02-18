import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions.component';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsListComponent } from './components/subscriptions-list/subscriptions-list.component';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionsRoutingModule
  ],
  declarations: [SubscriptionsComponent, SubscriptionsListComponent]
})
export class SubscriptionsModule { }
