import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ContactPage } from '../contact/contact';
import { FindPage } from '../find/find';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tabspage = TabsPage;
  contactpage = ContactPage;
  findpage = FindPage;

  constructor(public navCtrl: NavController) {

  }

}
