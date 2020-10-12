import { TicketState } from './../services/ticket-state.service';
import { Board } from './../models/board.model';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  board: Board;

  constructor(private ticketState: TicketState, public dialog: MatDialog) {
    this.board = this.ticketState.boardData;
  }

  ngOnInit(): void {}
}
