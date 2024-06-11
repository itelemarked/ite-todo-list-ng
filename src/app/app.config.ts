import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyAP7cEDguAxZlFQAh88r7R3ApNC3RXdW-Y",
  authDomain: "ite-todo-f9e2c.firebaseapp.com",
  databaseURL: "https://ite-todo-f9e2c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ite-todo-f9e2c",
  storageBucket: "ite-todo-f9e2c.appspot.com",
  messagingSenderId: "172881690257",
  appId: "1:172881690257:web:5c060461a77c6638f58930"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideIonicAngular({mode: 'ios'}), 
    // provideFirebaseApp(() => initializeApp({
    //   "projectId":"ite-todo-f9e2c",
    //   "appId":"1:172881690257:web:5c060461a77c6638f58930",
    //   "databaseURL":"https://ite-todo-f9e2c-default-rtdb.europe-west1.firebasedatabase.app",
    //   "storageBucket":"ite-todo-f9e2c.appspot.com",
    //   "locationId":"europe-west",
    //   "apiKey":"AIzaSyAP7cEDguAxZlFQAh88r7R3ApNC3RXdW-Y",
    //   "authDomain":"ite-todo-f9e2c.firebaseapp.com",
    //   "messagingSenderId":"172881690257"
    // })), 
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase())
  ]
};
