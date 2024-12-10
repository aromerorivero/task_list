import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  taskToDo: number = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskToDo = this.taskService.countToDo();

    this.taskService.getTask().subscribe(() => {
      this.taskToDo = this.taskService.countToDo();
    });
  }
}
