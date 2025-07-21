import { Routes } from '@angular/router';
import { HomePage } from './modules/home/home.page';
import { TodosPage } from './modules/todos/todos.page';
import { AuthPage } from './modules/auth/auth.page';


const ORIGIN = '/auth'

export const routes: Routes = [
  { path: '', redirectTo: ORIGIN, pathMatch: 'full' },

  { path: 'home', component: HomePage },
  { path: 'todos', component: TodosPage },
  { path: 'auth', component: AuthPage },

  { path: '**', redirectTo: ORIGIN, pathMatch: 'full' }
];
