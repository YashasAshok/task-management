import { Component, Input } from '@angular/core';
import { Task } from '../../../models/tasks/task.model';
import { TaskService } from '../../../service/tasks';
import { TaskItem } from '../task-item/task-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-list',
  imports: [TaskItem, NgFor],
  templateUrl: './main-list.html',
  styleUrl: './main-list.scss',
})
export class MainList {
  @Input() pageTitle: string = '';
  tasks: Task[] = [];
  
  constructor( private taskService: TaskService) { }
  
  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      if(this.pageTitle === 'All Tasks'){
        this.tasks = tasks;
      }
      else if(this.pageTitle === 'Completed Tasks'){
        this.tasks = tasks.filter(task => task.status === 'Completed');
      }
    });
  }

  handleDelete(task: Task) {
    this.taskService.deleteTask(task.id);
  }
}
