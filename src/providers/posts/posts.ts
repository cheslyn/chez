import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsProvider {

  vposts: any = [];

  constructor() {
  }


  load(){

    this.vposts = [
     {title: 'Mercury', summary: 'Plant Mercury'},
     {title: 'Venus', summary: 'Plant Venus'},
     {title: 'Earth', summary: 'Plant Earth'},

    ]
  }

}
