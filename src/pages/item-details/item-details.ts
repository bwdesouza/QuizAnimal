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
      questao: "Ele(a) tem?",
      tituloA: "Patas",
      imgA: "../../assets/imgs/quiz/patas.png",
      tituloB: "Asas",
      imgB: "../../assets/imgs/quiz/asas.png",
      tituloC: "Barbatanas",
      imgC: "../../assets/imgs/quiz/barbatanas.png",
      tituloD: "Nenhum",
      imgD: "../../assets/imgs/quiz/nenhuma.png"
    } ;    
      
  }

  responder(questao, resposta){
    this.respostas.push(resposta);

    if(questao == 1){
      this.quiz = {
        num: 2,
        questao: "O que ele(a) come?",
        tituloA: "Pasto",
        imgA: "../../assets/imgs/quiz/grass.png",
        tituloB: "Carne",
        imgB: "../../assets/imgs/quiz/butcher.png",
        tituloC: "Ração",
        imgC: "../../assets/imgs/quiz/canned-food.png",
        tituloD: "Nenhum",
        imgD: "../../assets/imgs/quiz/nenhuma.png"
      };      
    }else if(questao == 2){
      this.quiz = {
        num: 3,
        questao: "Onde ele(a) vive?",
        tituloA: "Terra",
        imgA: "../../assets/imgs/quiz/forest.png",
        tituloB: "Aguá",
        imgB: "../../assets/imgs/quiz/beach.png",
        tituloC: "Céu",
        imgC: "../../assets/imgs/quiz/desert.png",
        tituloD: "Nenhum",
        imgD: "../../assets/imgs/quiz/nenhuma.png"
      };  
    }else if(questao == 3){      
      this.navCtrl.setRoot(ConclusaoPage, {
        respostasDadas: this.respostas,
        itemRespostas: this.selectedItem.respostas
      });
    }
  }

}
