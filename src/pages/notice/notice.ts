import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {

public tap1 : number = 1;
public tap2 : number = 12;
public tap3 : number = 22;
public tap4 : number = 2;
public tap5 : number = 40;

tapEvent1(e){
  if(this.tap1=1){this.tap1=2} else {this.tap1=2}
}

tapEvent2(e){
  if(this.tap2=12){this.tap2=13} else {this.tap2=13}
}

tapEvent3(e){
  if(this.tap3=22){this.tap3=23} else {this.tap3=23}
}

tapEvent4(e){
  if(this.tap4=2){this.tap4=3} else {this.tap4=3}
}

tapEvent5(e){
  if(this.tap5=40){this.tap5=41} else {this.tap5=41}
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
  }

}
