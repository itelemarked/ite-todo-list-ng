import { Component } from "@angular/core";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";
import { AuthLoginComponent } from "./auth-login.component";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AuthLoginComponent],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Auth</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <app-auth-login />
    </ion-content>
  `,
  styles: ``
})
export class AuthPage {
  constructor() {}
}