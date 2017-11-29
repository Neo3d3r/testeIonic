import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    FilmeProvider
  ]
})
export class FeedPage {

  public lista_filmes = new Array<any>();

  public objeto_feed = {
    titulo: "Ederson C. Menezes",
    data: "November 22, 2017",
    descricao: "Aprendendo API com JSON em IONIC 3.",
    qntd_likes: 10,
    qntd_comentarios: 3,
    data_comentarios: "2h ago"
  }

  public nome_usuario: string = "Ederson C. Menezes";

  constructor(public navCtrl: NavController, public navParams: NavParams, public filmeProvider: FilmeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');

    this.filmeProvider.getFilmesPopulares().subscribe(
      data => {
        const resposta = (data as any);
        const objeto_retorno = JSON.parse(resposta._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
  somarnumeros(): number {

    return;
  }

}
