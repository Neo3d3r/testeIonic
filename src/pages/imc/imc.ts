import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {
  public num1:any;
  public num2:any;
  public result:any;
  public saude:any;

  calculo_Imc(): void{
    
    this.result = Math.round( parseFloat(this.num2) / (parseFloat(this.num1) * parseFloat(this.num1))); 
  if (this.result < 18){
    this.saude = "Abaixo do peso.";
  }else if (this.result > 18 && this.result < 25) {
    this.saude = "Peso Normal.";
  } else {
    this.saude = "Acima do peso.";
  }{
    
  }
  } 

  constructor(public navCtrl: NavController) {
  }

}
