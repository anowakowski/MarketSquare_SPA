import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'subscriptions',
    loadChildren: '../app/modules/subscriptions/subscriptions.module#SubscriptionsModule'
  },
  {
    path: 'settings',
    loadChildren: '../app/modules/settings/settings.module#SettingsModule'
  },
  {
    path: '',
    loadChildren: '../app/modules/notices/notices.module#NoticesModule'
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
