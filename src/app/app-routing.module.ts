import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginRegisterGuard } from './guards/login-register.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: '../app/modules/login-register/login-register.module#LoginRegisterModule',
    canActivate: [LoginRegisterGuard]
  },
  {
    path: 'subscriptions',
    loadChildren: '../app/modules/subscriptions/subscriptions.module#SubscriptionsModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'settings',
    loadChildren: '../app/modules/settings/settings.module#SettingsModule',
    canActivate: [ AuthGuard ]
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
