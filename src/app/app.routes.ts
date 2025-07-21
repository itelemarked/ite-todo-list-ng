import { Routes } from '@angular/router';
import { TodoListPage } from './pages/todo-list/todo-list.page';



const ORIGIN = '/todos'

export const routes: Routes = [
  { path: '', redirectTo: ORIGIN, pathMatch: 'full' },

  { path: 'todos', component: TodoListPage },
  // { path: 'auth', component: AuthPage },

  { path: '**', redirectTo: ORIGIN, pathMatch: 'full' }
];
