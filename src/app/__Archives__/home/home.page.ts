import { Component } from "@angular/core";
import {
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {
  
}