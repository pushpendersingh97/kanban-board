import { Column } from './../models/column.model';
import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TicketState } from '../services/ticket-state.service';
import { Board } from '../models/board.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() column: Column;
  @Input() board_no: number;
  board: Board;

  constructor(private ticketState: TicketState) {
    this.board = this.ticketState.boardData;
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void {
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

  onDelete(taskId: number, columnName: string): void{
    const deleteTask = confirm('Are you sure you want to delete?');

    if (deleteTask){
      this.ticketState.deleteTicket(taskId, columnName);
    }
  }

}
