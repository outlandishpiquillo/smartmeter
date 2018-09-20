import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(header: string, message: string) {
    this.alertCtrl.create({
      title: header,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  sign() {
    //this.fire.auth.sendPasswordResetEmail()
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(data => {
      this.alert('Success', 'You are logged in');
      this.navCtrl.setRoot( HomePage );
      //user is logged in
    })
    .catch(error => {
      this.alert('Error', error.message);
    })
  }
}
