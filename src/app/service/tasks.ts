import { Injectable } from '@angular/core';
import { Task } from '../models/tasks/task.model';
import { BehaviorSubject } from 'rxjs';
import { TASKS } from '../sample-data/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>(this.loadTasks());
  tasks$ = this.tasksSubject.asObservable();

  private tasks: Task[] = TASKS;

  constructor() {
    this.tasks = this.loadTasks();
  }

  private loadTasks(): Task[] {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : TASKS;
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
    this.saveTasks();
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.tasksSubject.next(this.tasks);
      this.saveTasks();
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.tasksSubject.next(this.tasks);
    this.saveTasks();
  }

  getTasks(status? : 'Pending' | 'In progress' | 'Completed'): Task[] {
    if (status) {
      return this.tasks.filter(task => task.status === status);
    }
    return this.tasks;
  }
  
}
