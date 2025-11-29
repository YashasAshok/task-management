import { Component, OnInit } from '@angular/core';
import { CommonLayout } from '../../shared/common-layout/common-layout';
import { Task } from '../../../models/tasks/task.model';
import { TaskService } from '../../../service/tasks';

@Component({
  selector: 'app-all-tasks',
  imports: [CommonLayout],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.scss',
})
export class AllTasks{
  
}
