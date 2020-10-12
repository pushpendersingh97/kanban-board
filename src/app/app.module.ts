import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TicketState } from './services/ticket-state.service';
import { MainViewComponent } from './main-view/main-view.component';
import { DialogEntryComponent, HeaderComponent } from './header/header.component';

import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskListComponent } from './task-list/task-list.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    TicketDialogComponent,
    DialogEntryComponent,
    TaskListComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [TicketState],
  bootstrap: [AppComponent],
})
export class AppModule { }
