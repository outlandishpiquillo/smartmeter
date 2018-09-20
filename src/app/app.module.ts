import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { QrscannerPage } from '../pages/qrscanner/qrscanner';
import { BuildinginfoPage } from '../pages/buildinginfo/buildinginfo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxQRCodeModule} from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = { 
    apiKey: "AIzaSyDAvk1mSjyhnB4lkup_iKNt_aFhwXVYf5I",
    authDomain: "smartmeternyp.firebaseapp.com",
    databaseURL: "https://smartmeternyp.firebaseio.com",
    projectId: "smartmeternyp",
    storageBucket: "smartmeternyp.appspot.com",
    messagingSenderId: "244658578869"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    QrscannerPage,
    BuildinginfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    QrscannerPage,
    BuildinginfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
