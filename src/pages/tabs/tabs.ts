import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { StatPage } from '../stat/stat';
import { NoticePage } from '../notice/notice';
import { MessagePage } from '../message/message';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StatPage;
  tab3Root = NoticePage;
  tab4Root = MessagePage;
  tab5Root = SettingPage;

  constructor() {

  }
}
