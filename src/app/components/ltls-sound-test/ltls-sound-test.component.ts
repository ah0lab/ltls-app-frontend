import { Component, OnInit } from '@angular/core';
import { LtlsObjectService } from '../../services/ltls-object.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalLSLPage } from 'src/app/pages/modal-lsl/modal-lsl.page';
import { ModalStratPage } from 'src/app/pages/modal-strat/modal-strat.page';

@Component({
  selector: 'app-sound',
  templateUrl: './ltls-sound-test.component.html',
  styleUrls: ['./ltls-sound-test.component.scss'],
})
export class LtlsSoundTestComponent implements OnInit {

  audio: HTMLAudioElement;
  wasPlayed: boolean;
  soundName: string;
  wasHeard: boolean;
  wasHeardClicked: boolean;
  nextSound : boolean;

  constructor(private resource: LtlsObjectService,
              public alertController: AlertController, public toastController: ToastController, public modalController: ModalController) { }

  ngOnInit() {
    this.soundName = 'cow';
    this.audio = new Audio();
    this.audio.src = this.resource.returnSoundFile(this.soundName);
    if (this.audio.src === null) {
      this.soundNotFound();
    } else {
      this.audio.load();
    }
    this.wasPlayed = false;
    this.wasHeardClicked = false;
    this.nextSound = false;
  }

  async soundNotFound() {
    const alert = await this.alertController.create({
      header: 'Unable to loud sound',
      message: 'Please try again later',
      buttons: ['Continue']
    });
    await alert.present();
  }

  playSound() {
    this.audio.play();
    this.wasPlayed = true;
  }

   async canHear() {
      const toast = await this.toastController.create({
        message: 'Hearing data saved',
        duration: 2000
      });
      toast.present();
    this.wasHeard = true;
    this.wasHeardClicked = true;
    this.nextSound = true;
  }

  async cannotHear(){
    const toast = await this.toastController.create({
      message: 'Here is a tip to help you hear better!',
      duration: 5000
    });
    toast.present();
    this.showStratTip();
    this.wasHeard = false;


  }

  async goBack(){
    this.wasHeardClicked = false;
  }

  async showStratTip(){
    const modal = await this.modalController.create({
        component: ModalStratPage
    });
    return await modal.present();

  }

  async showLslTip(){
    const modal = await this.modalController.create({
      component: ModalLSLPage
  });
  return await modal.present();

  }


}
