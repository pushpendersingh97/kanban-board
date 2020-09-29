import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogEntryComponent } from './header/header.component';

import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/mainView', pathMatch: 'full'},
  {path: 'mainView', component: MainViewComponent, children: [
    { path: 'newTicket', component: DialogEntryComponent},
    { path: 'editTicket', component: DialogEntryComponent}
  ]},
  {path: '**', redirectTo: 'mainView'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
