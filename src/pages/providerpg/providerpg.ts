import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';


@IonicPage()
@Component({
  selector: 'page-providerpg',
  templateUrl: 'providerpg.html',
})
export class ProviderpgPage {

  
  vposts: any = [];
  constructor(public navCtrl: NavController, public postsService: PostsProvider) {
  }

  ionViewDidLoad() {
  this.postsService.load();
  }


}
