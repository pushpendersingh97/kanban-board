import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogEntryComponent } from './header/header.component';

import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: AuthComponent},
  {path: 'mainView', component: MainViewComponent, children: [
    { path: 'newTicket', component: DialogEntryComponent},
    { path: 'editTicket', component: DialogEntryComponent}
  ]},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
