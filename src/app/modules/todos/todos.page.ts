import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonCheckbox } from '@ionic/angular/standalone';
import { TodoService } from './todo.service';
import { TodoListComponent } from './todo-list.component';
import { TodoListAddComponent } from './todo-list-add.component';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, TodoListComponent, TodoListAddComponent],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>TODOS</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [forceOverscroll]="false" class="ion-padding">
      <app-todo-list-add/>
      <app-todo-list/>
    </ion-content>
  `,
  styles: ``,
})
export class TodosPage {

  constructor(private todoService: TodoService) {
    // todoService.add({title: 'brand new todo', completed: false}).then(console.log)
    // todoService.update('aaa', {title: 'updated title'})
    //   .then(_ => console.log('success update'))
    //   .catch(err => console.log('error update:', err.message))
    // todoService.update('dnFKC5HTdoPw2UcRmM99', {title: 'it worked!!'}).subscribe(console.log)    
  }
  
}
