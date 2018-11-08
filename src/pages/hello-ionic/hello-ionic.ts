import { Component } from '@angular/core';
import { ItemDetailsPage } from '../item-details/item-details';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  item : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  chamaQuiz(animal, caminhoFoto){
    this.item = {
      titulo: animal,
      caminhoFoto: caminhoFoto
    }
    
    this.navCtrl.push(ItemDetailsPage, {
      item: this.item
    });
  }
}
