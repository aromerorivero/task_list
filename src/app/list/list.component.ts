import { Component } from "@angular/core";
import { TaskService } from "../task.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  constructor(public taskService: TaskService) {}

  changeState(index: number): void {
    this.taskService.changeState(index);
  }
}
