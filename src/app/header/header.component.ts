import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  newTicket(): void {
    const dialogRef = this.dialog.open(TicketDialogComponent, {
      width: '400px',
      data: {title: "Create a new Ticket"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
