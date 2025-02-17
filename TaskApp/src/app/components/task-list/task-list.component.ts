import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

interface Task {
  id : number;
  title : string;
  completed : boolean;
}

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
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
    this.taskService.getTasks().subscribe(tasks => { this.tasks = tasks });
  }

  onTaskAdded():void {
    this.fetchTasks();
  }

  onUpdate(id : number){
    const taskToUpdate = this.tasks.find(task => task.id === id);

    if(!taskToUpdate) return ;

    const updatedTask = {...taskToUpdate, completed : !taskToUpdate.completed};

    this.taskService.updateTask(id, updatedTask).subscribe(updated => {
      this.tasks = this.tasks.map(task => (task.id === id ?  updated : task ));
      alert("Task Updated Successfully....");
    });
  }

  deleteTask(id : number): void {

    if(!confirm("Are you sure want to delete this task?")) return;

    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
      console.log(`Task with task Id : ${id} deleted successfully....`);
    });
  }

}
