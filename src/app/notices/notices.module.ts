import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesComponent } from './notices.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: NoticesComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticesComponent]
})
export class NoticesModule { }
