import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}


