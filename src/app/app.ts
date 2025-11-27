import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNav } from './components/side-nav/side-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TaskManagement');
  sideNavOpen = signal(true);

  toggleSideNav() {
    console.log('Toggling side nav');
    this.sideNavOpen.set(!this.sideNavOpen());
  }
}
