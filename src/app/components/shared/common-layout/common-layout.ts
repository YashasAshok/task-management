import { Component, Input } from '@angular/core';
import { FilterLayout } from '../filter-layout/filter-layout';
import { MainList } from '../main-list/main-list';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-common-layout',
  imports: [MainList, AddTaskComponent],
  templateUrl: './common-layout.html',
  styleUrl: './common-layout.scss',
})
export class CommonLayout {
  @Input() pageTitle: string = '';

  
}
