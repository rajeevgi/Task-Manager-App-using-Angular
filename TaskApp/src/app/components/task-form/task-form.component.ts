import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Define Task interface directly in this file
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  title: string = '';

  @Output() taskAdded = new EventEmitter<void>();

  constructor(private taskService: TaskService, private router : Router) {}

  createTask(): void {
    if (!this.title.trim()) return;
    // newTask Object
    const newTask: Task = {
      id: 0,
      title: this.title,
      completed: false,
    };
    // Emitting Object
    this.taskService.createTask(newTask).subscribe(() => {
      this.taskAdded.emit();
      this.title = '';
      alert("Task Added Successfully...");
      this.router.navigateByUrl("app-task-list");
    });
  }
}
