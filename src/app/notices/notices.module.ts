import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesComponent } from './notices.component';
import { NoticesRoutingModule } from './notices-routing.module';
import { AllNoticesListComponent } from './components/all-notices-list/all-notices-list.component';

@NgModule({
  imports: [
    CommonModule,
    NoticesRoutingModule
  ],
  declarations: [NoticesComponent, AllNoticesListComponent]
})
export class NoticesModule { }
