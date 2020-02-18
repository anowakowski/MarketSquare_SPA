import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions.component';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionsRoutingModule
  ],
  declarations: [SubscriptionsComponent]
})
export class SubscriptionsModule { }
