import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from "../task-form/task-form.component";

interface Task {
  id ?: number;
  title : string;
  completed : boolean;
}

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks : Task[] = [];

  constructor(private taskService : TaskService){};

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
  }

  onTaskAdded():void {
    this.fetchTasks();
  }

  deleteTask(id : number): void {

    if(!confirm("Are you sure want to delete this task?")) return;

    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
      console.log(`Task with task Id : ${id} deleted successfully....`);
    });
  }

}
