export class ToDo {
  isDone: boolean;
  heartChecked: boolean;
  thumbChecked: boolean;
  constructor(public task: string) {
    this.isDone = false;
    this.heartChecked = false;
    this.thumbChecked = false;
  }
}
