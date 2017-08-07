import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { ActionPage } from '../pages/action/action';
import { AlertPage } from '../pages/alert/alert';
import { CalertPage } from '../pages/calert/calert';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { ButtoncPage } from '../pages/buttonc/buttonc';
import { ButtonPage } from '../pages/button/button';
import { CardlPage } from '../pages/cardl/cardl';
import { BackgPage } from '../pages/backg/backg';
import { SoccPage } from '../pages/socc/socc';
import { MapcPage } from '../pages/mapc/mapc';
import { FabsPage } from '../pages/fabs/fabs';
import { InputsPage } from '../pages/inputs/inputs';
import { ModalsPage } from '../pages/modals/modals';
import { NavigationPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation-details/navigation-details';
import { RangePage } from '../pages/range/range';
import { SearchPage } from '../pages/search/search';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';
import {ProviderpgPage } from '../pages/providerpg/providerpg';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Action Page', component: ActionPage },
      { title: 'Alert Page', component: AlertPage },
      { title: 'Calert Page', component: CalertPage },
      { title: 'Checkbox Page', component: CheckboxPage },
      { title: 'Button Page', component: ButtonPage },
      { title: 'Card List Page', component: CardlPage },
      { title: 'Background g Page', component: BackgPage },
      { title: 'Map card Page', component: MapcPage },
      { title: 'Social card Page', component: SoccPage },
      { title: 'Button-C Page', component: ButtoncPage },
      { title: 'Float buttons Page', component: FabsPage },
      { title: 'Inputs - 1 Page', component: InputsPage },
      { title: 'ModalsPage', component: ModalsPage },
      { title: 'NavigationPage', component: NavigationPage },
      { title: 'NavigationDeailsPage', component: NavigationDetailsPage },     
      { title: 'RangePage', component: RangePage },
      { title: 'SearchPage', component: SearchPage },
      { title: 'SegmentPage', component: SegmentPage },
      { title: 'SelectPage', component: SelectPage },
      { title: 'Provider PG', component: ProviderpgPage }
      

      
      

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
