import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the ConclusaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conclusao',
  templateUrl: 'conclusao.html',
})
export class ConclusaoPage {
  respostasDadas: any;
  itemRespostas: any;
  titulo: any;
  imagem: any;
  acertos: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.respostasDadas = navParams.get('respostasDadas');
    this.itemRespostas = navParams.get('itemRespostas');

    this.calcularResposta();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConclusaoPage');
  }

  comecarNovamente(){ 
    this.navCtrl.push(HelloIonicPage);    
  }

  calcularResposta(){
    this.acertos = 0;
    if(this.respostasDadas[0] == this.itemRespostas[0]){
      this.acertos++;
    }
    if(this.respostasDadas[1] == this.itemRespostas[1]){
      this.acertos++;
    }
    if(this.respostasDadas[2] == this.itemRespostas[2]){
      this.acertos++;
    }

    if(this.acertos == 0){
      this.titulo = "Que pena, tente novamente!";
      this.imagem = "../../assets/imgs/quiz/acertei0.png";
    }
    else if(this.acertos == 1){
      this.titulo = "Você está quase lá, tente novamente!";
      this.imagem = "../../assets/imgs/quiz/acertei1.png";
    }
    else if(this.acertos == 2){
      this.titulo = "Parabéns está quase lá!";
      this.imagem = "../../assets/imgs/quiz/acertei2.png";
    }
    else if(this.acertos == 3){
      this.titulo = "Parabéns você acertou tudo!!";
      this.imagem = "../../assets/imgs/quiz/acertei3.png";
    }

  }
}
