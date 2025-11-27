import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'all-tasks', pathMatch: 'full' },
    { path: 'all-tasks', loadComponent: () => import('./components/pages/all-tasks/all-tasks').then(m => m.AllTasks) },
    { path: 'completed-tasks', loadComponent: () => import('./components/pages/completed-tasks/completed-tasks').then(m => m.CompletedTasks) },
];
