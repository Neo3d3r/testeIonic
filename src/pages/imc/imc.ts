import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  calculo_Imc(): number{

    return;
  } 

  constructor(public navCtrl: NavController) {
  }

}
