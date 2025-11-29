import { Component, Input } from '@angular/core';
import { FilterLayout } from '../filter-layout/filter-layout';
import { MainList } from '../main-list/main-list';

@Component({
  selector: 'app-common-layout',
  imports: [FilterLayout, MainList],
  templateUrl: './common-layout.html',
  styleUrl: './common-layout.scss',
})
export class CommonLayout {
  @Input() pageTitle: string = '';

  
}
