import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesComponent } from './notices.component';
import { NoticesRoutingModule } from './notices-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NoticesRoutingModule
  ],
  declarations: [NoticesComponent]
})
export class NoticesModule { }
