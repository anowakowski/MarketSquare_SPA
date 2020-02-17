import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NoticesComponent } from './notices.component';
import { NoticesRoutingModule } from './notices-routing.module';
import { AllNoticesListComponent } from './components/all-notices-list/all-notices-list.component';
import { AddNewNoticesComponent } from './components/add-new-notices/add-new-notices.component';
import { TagComponent } from './components/tag/tag.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NoticesRoutingModule
  ],
  declarations: [
    NoticesComponent,
    AllNoticesListComponent,
    AddNewNoticesComponent,
    TagComponent
  ]
})
export class NoticesModule { }
