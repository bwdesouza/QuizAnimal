import { Component } from '@angular/core';
import { ItemDetailsPage } from '../item-details/item-details';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  item : any;
  animais : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider: RestProvider, private nativeAudio: NativeAudio) {
    this.iniciaMusica();
    this.carregaAnimais();
  }	
  
  ionViewDidLoad() {
		this.nativeAudio.preloadSimple('audio1','../../assets/musicas/musica2.mp3');
    this.nativeAudio.play('audio1', () => console.log('uniqueId1 is done playing'));
    
    // this.nativeAudio.loop('audio1');
		}

  iniciaMusica(){
    // debugger;
    // this.nativeAudio.preloadSimple('uniqueId1', '../../../assets/musicas/musica1.mp3').then();
    // // this.nativeAudio.preloadComplex('uniqueId2', '../../assets/musicas/musica2.mp3', 1, 1, 0).then(onSuccess, onError);

    // this.nativeAudio.play('uniqueId1').then();

    // this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));

    // this.nativeAudio.loop('uniqueId2').then(onSuccess, onError);

    // this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);

    // this.nativeAudio.stop('uniqueId1').then(onSuccess,onError);

    // this.nativeAudio.unload('uniqueId1').then(onSuccess,onError);
  }

  carregaAnimais() {
    this.restProvider.carregaAnimais().subscribe(resp => {
      this.animais = [];
      resp.animais.forEach(animal => {
        this.animais.push(animal);
      });
    });

  }

  chamaQuiz(animal, caminhoFoto, respostas){
    this.item = {
      titulo: animal,
      caminhoFoto: caminhoFoto,
      respostas: respostas
    }
    
    this.navCtrl.push(ItemDetailsPage, {
      item: this.item
    });
  }
}
