import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrscanner',
  templateUrl: 'qrscanner.html',
})
export class QrscannerPage {

	scannedcode = null;
  meterId = null;
  blkNo = null;
  unitNo = null;

  constructor(private barcodeScanner: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrscannerPage');
  }

  scanCode(scannedcode) {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedcode = barcodeData.text;
      this.meterId = this.scannedcode.split(" ")[0];
      this.blkNo = this.scannedcode.split(" ")[1];
      this.unitNo = this.scannedcode.split(" ")[2];
    })
  }
}

