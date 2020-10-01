import { Board } from './../models/board.model';
import { Column } from '../models/column.model';

export class TicketState {
  private todo: Array<string> = ['Get to work', 'Fall asleep'];
  private inProgress: Array<string> = ['Get up', 'Develop'];
  private done: Array<string> = ['Check e-mail', 'Walk dog'];

  private board: Board = new Board('test Board',
  [
     new Column('todo', this.todo),
     new Column('inProgress', this.inProgress),
     new Column('done', this.done),
  ]);
  
 get boardData() {
   return this.board;
 }

  addNewTicket(value: string) {
    this.todo.push(value);
  }

  // Need an alternative for getting column data
  private getColumn(columnName: string){
    switch(columnName){
      case 'todo':
         return this.todo;
      case 'inProgress': 
        return this.inProgress;
      case 'done': 
        return this.done;
    }

  }

  getTaskDetails(columnName: string, index: number){
   let columnArray = this.getColumn(columnName);
   return columnArray[index];
  }

  updateTicket(columnName: string, index: number, updateTask: string){
    let columnArray = this.getColumn(columnName);
    columnArray[index] = updateTask;
  }
}
