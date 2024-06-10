import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
  templateUrl: './todos.page.html',
  styleUrl: './todos.page.css',
})
export class TodosPage {
  
}
