import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const paths: {}[] = [
  {path: "" , component: HomeComponent},
  {path: "login" , component: LoginComponent}
]

const firebaseConfig = {
  apiKey: "AIzaSyApTf2zxKb3z03NPvFVLIyuwC0t_INjWsc",
  authDomain: "blitz-e0d3d.firebaseapp.com",
  databaseURL: "https://blitz-e0d3d.firebaseio.com",
  projectId: "blitz-e0d3d",
  storageBucket: "blitz-e0d3d.appspot.com",
  messagingSenderId: "557222644142",
  appId: "1:557222644142:web:10930c6f089e57f44b203f",
  measurementId: "G-F3JRR1M4WM"
};

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  MDBBootstrapModule.forRoot(),
                  RouterModule.forRoot(paths),
                  AngularFireModule.initializeApp(firebaseConfig),
                  AngularFireDatabaseModule,
                  AngularFirestoreModule,
                  AngularFireAuthModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
