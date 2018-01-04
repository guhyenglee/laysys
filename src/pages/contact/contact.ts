import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
    constructor(public navCtrl: NavController, public alertCtrl:AlertController){}

  username: string;
  password: string;

  public signUp(){
    var self = this;
    console.log (self.username);
    console.log (self.password);
  }
}
  
