import { Component } from "@angular/core";
import { TaskService } from "../task.service";


@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent{
  newTask: string = "";

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask) {
      this.taskService.addTask(this.newTask);
      this.newTask = ""; 
    }
  }
}