import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

	public nome_usuario:string = "Ederson C. Menezes";

  constructor(public navCtrl: NavController) {
  }
somarnumeros(): number{

  return;
}

}
