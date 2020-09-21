import { TicketState } from './services/ticket-state.service';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './main-view/main-view.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    NewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    CommonModule,
    AngularMaterialModule
  ],
  providers: [TicketState],
  bootstrap: [AppComponent]
})
export class AppModule { }
