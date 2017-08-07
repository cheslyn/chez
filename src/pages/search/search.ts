import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
      console.log(this.navParams.get('userid'));
      console.log(this.navParams.get('passwd'));

  }

  closeModal(){
    let data = {
     title: 'hello',
     message: 'how are you '

    }
    this.viewCtrl.dismiss(data);
  }


}
