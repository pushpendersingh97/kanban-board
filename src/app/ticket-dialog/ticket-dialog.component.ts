import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TicketState } from './../services/ticket-state.service';


@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent implements OnInit {
  title: string;

  @ViewChild('summaryInput', { static: true }) summaryInputRef: ElementRef;

  constructor(
    private ticketState: TicketState,
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private route: ActivatedRoute) {}
    
    ngOnInit(): void {
      this.route.queryParams.subscribe(
        (param: Params) => {
          console.log(param);
          if(param['dialog']=== 'new') {
            this.title = "New Ticket"
          }
          else if(param['dialog']=== 'edit'){
            this.title = "Update Ticket"
          }
        }
      );
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    addNewTicket(){
      this.ticketState.addNewTicket(this.summaryInputRef.nativeElement.value);
      this.dialogRef.close();
    }

}
