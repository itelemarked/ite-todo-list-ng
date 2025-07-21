import { Component, inject } from '@angular/core';
import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { Todo } from '../../types/Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonButton,
    IonIcon,
    IonNote
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title> TodoList </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content [forceOverscroll]="false">
      <ng-container *ngFor="let todo of todoService.todos$ | async">
        <ion-item>
          <ion-checkbox
            labelPlacement="end"
            justify="start"
            [ngModel]="todo.completed"
            (ngModelChange)="todoService.updateTodo(todo.id, {completed: $event})"
            ><h6>{{ todo.title }}</h6><ion-note>{{todo.id}}</ion-note></ion-checkbox
          >
          <ion-button slot="end" color="danger" (click)="todoService.removeTodo(todo.id)">
            <ion-icon slot="icon-only" name="trash-outline"></ion-icon>
          </ion-button>
        </ion-item>
      </ng-container>
    </ion-content>
  `,
  styles: [``],
})
export class TodoListPage {
  todoService = inject(TodoService);

  constructor() {
    addIcons({ trashOutline });
  }
}
