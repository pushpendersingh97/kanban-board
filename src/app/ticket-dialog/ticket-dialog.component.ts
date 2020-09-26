import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';
import { TicketState } from './../services/ticket-state.service';


@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent implements OnInit {
  @ViewChild('summaryInput', { static: true }) summaryInputRef: ElementRef;

  constructor(
    private ticketState: TicketState,
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}
    
    ngOnInit(): void {
    }

    onNoClick(): void {
    this.dialogRef.close();
    }

    addNewTicket(){
      this.ticketState.addNewTicket(this.summaryInputRef.nativeElement.value);
      this.dialogRef.close();
    }

}
