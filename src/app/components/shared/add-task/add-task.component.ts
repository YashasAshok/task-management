import { Component } from '@angular/core';
import { Task } from '../../../models/tasks/task.model';
import { TaskService } from '../../../service/tasks';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  form: { title: string; dueDate: string; description?: string; status: 'Pending' | 'In Progress' | 'Completed' } = {
    title: '',
    dueDate: '',
    description: '',
    status: 'Pending'
  };

  submitting = false;
  error = '';

  constructor(private taskService: TaskService) {}

  private nextId(): number {
    const list = this.taskService.getTasks();
    if (!list || list.length === 0) return 1;
    return list.reduce((max, t) => Math.max(max, Number(t.id)), 0) + 1;
  }

  onSubmit() {
    this.error = '';
    if (!this.form.title?.trim()) {
      this.error = 'Title is required';
      return;
    }
    if (!this.form.dueDate) {
      this.error = 'Due date is required';
      return;
    }

    this.submitting = true;
    try {
      const newTask: Task = {
        id: this.nextId(),
        title: this.form.title.trim(),
        description: this.form.description ?? '',
        dueDate: new Date(this.form.dueDate),
        status: this.form.status as any
      } as Task;

      this.taskService.addTask(newTask);

      // reset form
      this.form = { title: '', dueDate: '', description: '', status: 'Pending' };
    } finally {
      this.submitting = false;
    }
  }
}
