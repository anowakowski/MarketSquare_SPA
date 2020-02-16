import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesRoutingModule } from './notices-routing.module';
import { UserService } from 'src/app/services/user.service';
import { NoticesComponent } from './notices.component';


@NgModule({
  imports: [
    CommonModule,
    NoticesRoutingModule
  ],
  declarations: [NoticesComponent],
  providers: [
    UserService
  ]
})
export class NoticesModule { }
