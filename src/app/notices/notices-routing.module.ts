import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticesComponent } from './notices.component';
import { AddNewNoticesComponent } from './components/add-new-notices/add-new-notices.component';

const routes: Routes = [
    {path: '', component: NoticesComponent},
    {path: 'add-new-notices', component: AddNewNoticesComponent},
    {path: '**', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticesRoutingModule { }
