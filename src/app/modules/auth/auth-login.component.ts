import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonButton, IonIcon, IonInput, IonItem, IonLabel, IonNote } from "@ionic/angular/standalone";

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [CommonModule, FormsModule, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonNote],
  template: `

      <div 
        class="ite-input-control"
      >
        <!-- <ion-label>
          Email
        </ion-label> -->

        <ion-item [ngClass]="{'ite-item-focused': isFocused}">
          <ion-input
            label="Email"
            label-placement="stacked"
            :placeholder="Email"
            [(ngModel)]="emailCtl"
            (ionFocus)="onFocus()"
            (ionBlur)="onBlur()"
            required
          ></ion-input>

          <ion-button v-if="type === 'password'" slot="end" fill="clear">
            <ion-icon :icon="showPassword ? eyeOffOutline : eyeOutline" color="dark" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-item>

        <ion-note class="ion-padding-top" v-if="!valid" color="danger">
          <!-- eslint-disable-next-line vue/require-v-for-key -->
          <div v-for="error in errors">Some error here!</div>
        </ion-note>
      </div>

      <div class="container">
        abcd
      </div>

  `,
  styles: `
    .container {
      border: 1px solid white;
      border-radius: 5px;
      outline-style: solid;
      outline-width: var(--ite-focused-border-width);
      outline-color: var(--ite-focused-border-color);
    }

    :host {
      /* CSS custom properties */
      --ite-border-color: var(--ion-color-medium);
      --ite-border-radius: 5px;
      --ite-invalid-color: var(--ion-color-danger);
      --ite-focused-border-width: 2.5px;
      --ite-focused-border-color: var(--ion-color-dark);
    }

    ion-item {
      --border-color: var(--ite-border-color);
      --border-style: solid;
      --border-width: 1px;
      --border-radius: var(--ite-border-radius);
    }

    ion-item.ion-invalid {
      --border-color: var(--ite-invalid-color);
    }

    ion-item.ite-item-focused {
      outline-style: solid;
      outline-width: var(--ite-focused-border-width);
      outline-color: var(--ite-focused-border-color);
      // overflow: visible;
      // box-shadow: 0 0 20px red;
    }

    // .ite-input-control {
    //   /* CSS custom properties */
    //   --ite-border-color: var(--ion-color-medium);
    //   --ite-border-radius: 5px;
    //   --ite-invalid-color: var(--ion-color-danger);
    //   --ite-focused-border-width: 2.5px;
    //   --ite-focused-border-color: var(--ion-color-dark);
    // }

    // .ite-input-control {  
    //   & ion-item {
    //     border: 1px solid var(--ite-border-color);
    //     border-radius: var(--ite-border-radius);
    //     --inner-padding-end: 0;
    //     margin-top: 10px;
    //     margin-bottom: 5px;
    //   }

    //   &.input-control-invalid ion-item {
    //     border-color: var(--ite-invalid-color);
    //   }

    //   &.input-control-focused ion-item {
    //     outline-style: solid;
    //     outline-width: var(--ite-focused-border-width);
    //     outline-color: var(--ite-focused-border-color);
    //   }

    //   &.input-control-focused.input-control-invalid ion-item {
    //     outline-color: var(--ite-invalid-color);
    //   }

    //   & ion-note {
    //     font-size: 0.8em;
    //     color: var(--ite-invalid-color);
    //   }
    // }
  `
})
export class AuthLoginComponent {
  emailCtl = 'abcd'
  isFocused = false

  constructor() {}

  onFocus() {
    this.isFocused = true
  }

  onBlur() {
    this.isFocused = false
  }
}