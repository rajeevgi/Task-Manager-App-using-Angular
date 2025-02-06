import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Task {
  id ?: number;
  title : string;
  completed : boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http : HttpClient) { }

  // Get mapping for list all tasks.
  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Post mapping to save task.
  createTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, {
      headers : { 'Content-type' : 'application/json'}
    });
  } 

  // Update mapping to update task.
  updateTask(id : number, task : Task) : Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  // Delete mapping to delete task.
  deleteTask(id : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
