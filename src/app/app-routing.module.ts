import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/mainView', pathMatch: 'full'},
  {path: 'mainView', component: MainViewComponent},
  {path: 'new', component: NewTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
