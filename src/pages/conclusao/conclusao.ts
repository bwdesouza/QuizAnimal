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
  questao1: string = "1) Ele(a) tem?";
  questao2: string = "2) O que ele(a) come?";
  questao3: string = "3) Onde ele(a) vive?";
  resposta1: string;
  resposta2: string;
  resposta3: string;
  image1: any = "../../assets/imgs/quiz/error.png";
  image2: any = "../../assets/imgs/quiz/error.png";
  image3: any = "../../assets/imgs/quiz/error.png";

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
    this.resposta1 = this.respostasDadas[0];
    this.resposta2 = this.respostasDadas[1];
    this.resposta3 = this.respostasDadas[2];
    
    if(this.respostasDadas[0] == this.itemRespostas[0]){
      this.acertos++;
      this.image1 = "../../assets/imgs/quiz/done.png";
    }
    if(this.respostasDadas[1] == this.itemRespostas[1]){
      this.acertos++;
      this.image2 = "../../assets/imgs/quiz/done.png";
    }
    if(this.respostasDadas[2] == this.itemRespostas[2]){
      this.acertos++;
      this.image3 = "../../assets/imgs/quiz/done.png";
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
