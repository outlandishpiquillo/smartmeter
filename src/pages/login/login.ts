import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';

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

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
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
    let postData = {
      "email": this.email.value,
      "password": this.password.value
    }

    this.http.post("https://ljwycwebserver.azurewebsites.net/api/Auth", postData, {headers: {'Content-Type': 'application/json'}})
      .subscribe(data => {
        if (data == "Success")
        {
          this.alert('Success', 'You are logged in');
          this.navCtrl.setRoot( HomePage );
        }
        else
        {
          this.alert('Error', 'Wrong credentials, please try again');
        }
        
      }, error => {
          this.alert('Error', 'Wrong credentials, please try again');
      });
  }
}
