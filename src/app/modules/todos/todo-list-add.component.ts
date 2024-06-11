import { Component } from '@angular/core';
import { IonItem, IonInput, IonCheckbox, IonButton } from '@ionic/angular/standalone';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list-add',
  standalone: true,
  imports: [IonItem, IonInput, IonCheckbox, IonButton],
  template: `
    <div class="ion-margin-bottom outline">
      <ion-item>
        <ion-input 
          label="Title"
          [value]="inputTitle"
          (ionInput)="onInputTitleChange($event.target.value)">
        </ion-input>
      </ion-item>
      <ion-item>
        <ion-checkbox
          label-placement="start"
          [checked]="inputCompleted"
          (ionChange)="onInputCompletedChange($event.target.checked)">Completed</ion-checkbox>
      </ion-item>
      <ion-button
        expand="full"
        size="small"
        [disabled]="inputButtonDisabled"
        (click)="onAdd(inputTitle, inputCompleted)">
          Add
      </ion-button>
    </div>
  `,
  styles: `
    .outline {
      border: solid 1px lightgray;
    }
  `,
})
export class TodoListAddComponent {

  inputTitle = ''
  inputCompleted = false
  inputButtonDisabled = true

  constructor(private todoService: TodoService) {}

  onAdd(title: any, completed: any) {
    this.todoService.add({title, completed})
    this.inputTitle = ''
    this.inputCompleted = false
    this.inputButtonDisabled = true
  }

  onInputTitleChange(val: unknown) {
    this.inputTitle = val as string
    this.inputButtonDisabled = (val as string).trim() === ''
  }

  onInputCompletedChange(val: boolean) {
    this.inputCompleted = val
  }
}