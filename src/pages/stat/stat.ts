import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataPage } from '../data/data';
import * as HighCharts from 'highcharts';

/**
 * Generated class for the StatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stat',
  templateUrl: 'stat.html',
})
export class StatPage {

  datapage = DataPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatPage');

   HighCharts.chart('container1',{
      chart: {
        type: 'bar'
      },
      title:{
        text: '전월 비교'
        },
      xAxis:{
        categories: ['총합관리비','가스','전기']
      },
      yAxis:{
        title:{text:'₩'}
      },
      series: [{
        name: '금월',
        data: [33000,22000,1000]
      },{
        name: '전월',
        data: [33000,22000,4000]
      }]
    });

  HighCharts.chart('container2',{
      chart: {
        type: 'line'
      },
      title:{
        text: '근 12개월 추세'
        },
      xAxis:{
        categories: ['1','2','3','4','5','6','7','8','9','10','11','12']
      },
      yAxis:{
        title:{text:'₩'}
      },
      series: [{
        name: '총합관리비',
        data: [33000,22000,44000,11200,34121,21245,54312,12345,29102,11202,33000,44000]
      },{
        name: '가스',
        data: [5522,2312,1254,5432,8521,2114,2155,2456,6421,2456,3152,2112]
      },{
        name: '전기',
        data: [1123,540,212,125,125,654,990,1102,124,156,1235,921]
      }
      ]
    }
    );
  }
}