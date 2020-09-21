import { TicketState } from './../services/ticket-state.service';
import { Column } from './../models/column.model';
import { Board } from './../models/board.model';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {

  board: Board = new Board('test Board',
  [
     new Column('todo', this.ticketState.getTodo()),
     new Column('inProgress', this.ticketState.getInProgress()),
     new Column('done', this.ticketState.getDone()),
  ]);

  constructor(private ticketState: TicketState) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
