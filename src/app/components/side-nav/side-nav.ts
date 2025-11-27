import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
  @Input() isOpen: boolean = true;
}
