import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, IonButton],
  template: `
    <div 
      *ngFor="let todo of (todos$$ | async)"
      class="ion-margin-bottom outline">
      <p>
        id: {{ todo.id }} <br>
        title: {{ todo.title }} <br>
        completed: {{ todo.completed }}
      </p>
      <ion-button size="small" color="danger" (click)="onDelete(todo.id)">delete</ion-button>
    </div>
  `,
  styles: `
    .outline {
      border: solid 1px lightgray;
    }
  `,
})
export class TodoListComponent {

  todos$$ = this.todoService.todos$$

  constructor(private todoService: TodoService) {}

  onDelete(id: string) {
    this.todoService.delete(id)
  }
}