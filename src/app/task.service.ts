import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  task: { description: string; complete: boolean }[] = [];
  private taskSubject = new Subject<any>();
  
  addTask(description: string): any {
    this.task.push({ description, complete: false });
    this.taskSubject.next(this.task);
  }
  changeState(index: number): any {
    this.task[index].complete = !this.task[index].complete;
    this.taskSubject.next(this.task);
  }
  countToDo(): number {
    return this.task.filter(task => !task.complete).length;
  }
  getTask(): Observable<any> {
    return this.taskSubject.asObservable();
  }
}
