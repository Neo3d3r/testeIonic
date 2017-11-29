import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FilmeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmeProvider {

  caminhoBaseApi = "https://api.themoviedb.org/3";
  key = "a3290eb399075afba5344c32c20e7ccb";

  constructor(public http: Http) {
    console.log('Hello FilmeProvider Provider');
  }

  getFilmesPopulares() {
    return this.http.get(this.caminhoBaseApi + "/movie/popular?api_key=" + this.key);
  }


}
