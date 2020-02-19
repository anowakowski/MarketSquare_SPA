import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NoticesComponent } from './notices.component';
import { NoticesRoutingModule } from './notices-routing.module';
import { AllNoticesListComponent } from './components/all-notices-list/all-notices-list.component';
import { AddNewNoticesComponent } from './components/add-new-notices/add-new-notices.component';
import { TagComponent } from './components/tag/tag.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { NoticeService } from './services/notice.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AuthService } from 'src/app/services/auth.service';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NoticesRoutingModule,
    MaterialModule
  ],
  declarations: [
    NoticesComponent,
    AllNoticesListComponent,
    AddNewNoticesComponent,
    TagComponent,
    TagListComponent
  ],
  providers: [NoticeService]
})
export class NoticesModule { }
