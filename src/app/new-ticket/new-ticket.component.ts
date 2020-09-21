import { TicketState } from './../services/ticket-state.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {
  @ViewChild('summaryInput', { static: true }) summaryInputRef: ElementRef;
  
  constructor(private ticketState: TicketState) { }

  ngOnInit(): void {
  }

  addNewTicket(){
    this.ticketState.addNewTicket(this.summaryInputRef.nativeElement.value);
  }

}
