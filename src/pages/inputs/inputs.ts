import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';


/**
 * Generated class for the InputsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  launchSecondPage(){

      let data={
        userid: 'cheslyn',
        passwd: 'abcd',
        xdata: [
            'itss',
            'coe',
            'psn'
        ],
        location: 'Whitefield'

      }
      this.navCtrl.push(SearchPage,data);

  }
    launchSecondPageM(){


      let modal = this.modalCtrl.create(SearchPage) ;

      modal.onDidDismiss(
        (data) => {
        console.log(data);
      }
      );
      modal.present();
    }
  ionViewDidLoad() {
 
  }

}
