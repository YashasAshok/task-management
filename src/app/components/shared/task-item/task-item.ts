import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../models/tasks/task.model';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss',
})
export class TaskItem {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  onClick(task: any) {
    this.onDeleteTask.emit(task);
  }
}
