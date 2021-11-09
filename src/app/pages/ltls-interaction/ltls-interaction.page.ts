import { Component, Input, OnInit } from '@angular/core';
import { LtlsObject } from '../../model/ltls-object';
import { LtlsInteraction } from '../../model/ltls-interaction';
import { LtlsObjectService } from '../../services/ltls-object.service';
import {AlertController, ModalController, ToastController} from '@ionic/angular';
import {ModalLSLPage} from '../modal-lsl/modal-lsl.page';
import {ModalStratPage} from '../modal-strat/modal-strat.page';
import {LtlsSound} from '../../model/ltls-sound';
import {INTERACTION_TYPE, LTLS_INTERACTION_TYPE} from '../../model/ltls-interaction-type';
import {LtlsFormant} from '../../model/ltls-formant';
import {Router} from '@angular/router';
import { Router } from '@angular/router';
import { SaveDataService } from '../../services/save-data.service';

@Component({
  selector: 'app-ltls-interaction',
  templateUrl: './ltls-interaction.page.html',
  styleUrls: ['./ltls-interaction.page.scss'],
})
export class LtlsInteractionPage implements OnInit, LtlsInteraction {

  @Input() interactionType: LTLS_INTERACTION_TYPE = INTERACTION_TYPE.SOUND;
  @Input() ltlsObjects: LtlsObject[] = [
    {
      id: 0,
      media: new LtlsSound('snake',
        '../../assets/cow.mp3',
        { src: '../../assets/snake.png' },
        'Sss!'),
      tips: {
        strategy: {text: ' '},
        lslTip: {text: ' '}
      },
      formant: [
        new LtlsFormant(5000, 6000, 30)
      ]
    },
    {
      id: 1,
      media: new LtlsSound('airplane',
        '../../assets/cow.mp3',
        { src: '../../assets/airplane.png' },
        'Ahhh!'),
      tips: {
        strategy: {text: 'Move closer instead of speaking louder'},
        lslTip: {text: 'Talk about the object before you shot it to the child'}
      },
      formant: [
        new LtlsFormant(768, 1030, 55),
        new LtlsFormant(1370, 1551, 55)
      ]
    },
    {
      id: 2,
      media: new LtlsSound('train',
        '../../assets/cow.mp3',
        {src: '../../assets/train.png'},
        'Ooo!'),
      tips: {
        strategy: {text: ' '},
        lslTip: {text: ' '}
      },
      formant: [
        new LtlsFormant(439, 460, 55),
        new LtlsFormant(1105, 1170, 55)
      ]
    }];

  @Input() randomize = false;
  @Input() mediaPlayer: HTMLMediaElement;

  private currentIndex = 0;

  public currentSound: LtlsSound;
  public wasHeard: boolean;
  public isFinalSound = false;

  constructor(private ltlsObjectLoader: LtlsObjectService,
              private alertController: AlertController,
              private toastController: ToastController,
              private modalController: ModalController,
              private router: Router) { }
              private modalController: ModalController,
              private dataSaver: SaveDataService,
              private route: Router) { }

  ngOnInit() {
    if (this.ltlsObjects.length === 0) {
      this.ltlsObjectLoader.loadObjects();
      this.ltlsObjectLoader.ltlsObjects.subscribe(sound => {
        this.ltlsObjects.push(sound);
      });
      console.log(this.ltlsObjects.length);
    }
    this.mediaPlayer = new Audio();
    this.currentSound = this.ltlsObjects[this.currentIndex].media as LtlsSound;

    if (this.currentIndex === this.ltlsObjects.length - 1) {
      this.isFinalSound = true;
    }
  }

  endInteraction() {
    // Reset everything and exit back to main menu
    for(let object of this.ltlsObjects) {
      object.media.wasPlayed = false;
      object.media.wasHeard = false;
    }
    this.currentIndex = 0;
    this.currentSound = this.ltlsObjects[this.currentIndex].media as LtlsSound;

    this.router.navigate(['learn-sounds']);
  }

  playInteraction() {
    this.currentSound.play(this.mediaPlayer);

  }

  nextInteraction() {
    if (!this.isFinalSound) {
      this.currentIndex += 1;
      this.currentSound = this.ltlsObjects[this.currentIndex].media as LtlsSound;
      if (this.currentIndex === this.ltlsObjects.length - 1) {
        this.isFinalSound = true;
      }
    }
  }

  async showLslTip() {
    const modal = await this.modalController.create({
      component: ModalLSLPage
    });
    return await modal.present();
  }

  async showStrategy() {
    const modal = await this.modalController.create({
      component: ModalStratPage
    });
    return await modal.present();
  }

// This replaced goBack()
  restartInteraction() {
    this.currentSound.wasPlayed = false;
    this.currentSound.wasHeard = false;
  }

  /*
   *  Instead of cannot hear and can hear, we can use
   *  one function and pass the result of the test
   */
  // TODO: Rename result to something else maybe? Seems ambiguous
  async wasReceptive(result: boolean) {
    this.wasHeard = result;

    let msg: string;
    let dur: number;
    if (result) {
      this.dataSaver.saveResult(this.ltlsObjects[this.currentIndex]);
     msg = 'hearing data saved';
     dur = 2000;
     // TODO Record result here
    } else {
      msg = 'Hear Better Tip';
      dur = 40000;
    }

    const toast = await this.toastController.create({
      message: msg,
      duration: dur
    });
    await toast.present();
    await this.showStrategy();
    this.wasHeard = false;
  }

}
