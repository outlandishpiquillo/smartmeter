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
import { HttpClientModule } from '@angular/common/http';

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
    NgxQRCodeModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
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
