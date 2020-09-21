export class TicketState {
  private todo: Array<string> = ['Get to work', 'Fall asleep'];
  private inProgress: Array<string> = ['Get up', 'Develop'];
  private done: Array<string> = ['Check e-mail', 'Walk dog'];

  getTodo() {
    return this.todo;
  }

  getInProgress() {
    return this.inProgress.slice();
  }
  getDone() {
    return this.done.slice();
  }

  addNewTicket(value: string) {
    this.todo.push(value);
  }
}
