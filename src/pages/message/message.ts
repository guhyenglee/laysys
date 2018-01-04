import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})


export class MessagePage {

public inputMessage : string = '';

tapEvent(e){
  this.inputMessage = '';
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
