import { Routes } from '@angular/router';
import { HomePage } from './modules/home/home.page';
import { TodosPage } from './modules/todos/todos.page';


const ORIGIN = '/todos'

export const routes: Routes = [
  { path: '', redirectTo: ORIGIN, pathMatch: 'full' },

  { path: 'home', component: HomePage },
  { path: 'todos', component: TodosPage },

  { path: '**', redirectTo: ORIGIN, pathMatch: 'full' }
];
