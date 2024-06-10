import { Routes } from '@angular/router';
import { HomePage } from './modules/home/home.page';
import { TodosPage } from './modules/todos/todos.page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomePage },
  { path: 'todos', component: TodosPage },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
