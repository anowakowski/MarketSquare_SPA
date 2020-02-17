import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesRoutingModule } from './notices-routing.module';
import { UserService } from 'src/app/services/user.service';
import { NoticesComponent } from './notices.component';
import { TagComponent } from './components/tag/tag.component';
import { TagListComponent } from './components/tag-list/tag-list.component';


@NgModule({
  imports: [
    CommonModule,
    NoticesRoutingModule
  ],
  declarations: [NoticesComponent, TagComponent, TagListComponent],
  providers: [
    UserService
  ]
})
export class NoticesModule { }
