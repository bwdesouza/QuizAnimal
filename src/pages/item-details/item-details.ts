import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ConclusaoPage } from '../conclusao/conclusao';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  quiz: any;
  respostas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.respostas = [];

    this.quiz = {
      num: 1,
      questao: "Quantas patas ele(a) tem?",
      tituloA: "2",
      imgA: "../../assets/imgs/quiz/2patas.png",
      tituloB: "4",
      imgB: "../../assets/imgs/quiz/4patas.png"
    } ;    
      
  }

  responder(questao, resposta){
    this.respostas.push(resposta);

    if(questao == 1){
      this.quiz = {
        num: 2,
        questao: "O que ele come?",
        tituloA: "Pasto",
        imgA: "../../assets/imgs/quiz/grass.png",
        tituloB: "Carne",
        imgB: "../../assets/imgs/quiz/meat.png"
      };      
    }else if(questao == 2){
      this.quiz = {
        num: 3,
        questao: "Onde ele vive?",
        tituloA: "Terra",
        imgA: "../../assets/imgs/quiz/trees.png",
        tituloB: "Água",
        imgB: "../../assets/imgs/quiz/beach.png"
      };  
    }else if(questao == 3){      
      this.navCtrl.push(ConclusaoPage, {
        respostasDadas: this.respostas,
        itemRespostas: this.selectedItem.respostas
      });
    }
  }

}
