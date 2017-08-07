import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ActionPage } from '../pages/action/action';
import { AlertPage } from '../pages/alert/alert';
import { CalertPage } from '../pages/calert/calert';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { ButtonPage } from '../pages/button/button';
import { ButtoncPage } from '../pages/buttonc/buttonc';
import { CardlPage } from '../pages/cardl/cardl';
import { BackgPage } from '../pages/backg/backg';
import { SoccPage } from '../pages/socc/socc';
import { MapcPage } from '../pages/mapc/mapc';
import { FabsPage } from '../pages/fabs/fabs';
import { InputsPage } from '../pages/inputs/inputs';
import { Menu2Page } from '../pages/menu2/menu2';
import {ModalsPage } from '../pages/modals/modals';
import {NavigationPage } from '../pages/navigation/navigation';
import {NavigationDetailsPage } from '../pages/navigation-details/navigation-details';
import { RangePage } from '../pages/range/range';
import { SearchPage } from '../pages/search/search';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';
import {ProviderpgPage } from '../pages/providerpg/providerpg';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostsProvider } from '../providers/posts/posts';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionPage,
    AlertPage,
    CalertPage,
    CheckboxPage,
    ButtoncPage,
    ButtonPage,
    CardlPage,
    BackgPage,
    SoccPage,
    MapcPage,
    FabsPage,
    InputsPage,
    Menu2Page,
    ModalsPage,
    NavigationPage,
    RangePage,
    SearchPage,
    SegmentPage,
    SelectPage,
    ProviderpgPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionPage,
    AlertPage,
    CalertPage,
    CheckboxPage,
    ButtoncPage,
    ButtonPage,
    CardlPage,
    BackgPage,
    SoccPage,
    MapcPage,
    FabsPage,
    InputsPage,
    Menu2Page,
    ModalsPage,
    NavigationPage,
    RangePage,
    SearchPage,
    SegmentPage,
    SelectPage,
    ProviderpgPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsProvider
  ]
})
export class AppModule {}
