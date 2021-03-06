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

  constructor(private ltlsObjectLoader: LtlsObjectService,
              private alertController: AlertController,
              private toastController: ToastController,
              private modalController: ModalController) { }

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
  }

  endInteraction() {
    // TODO: exit back to main menu
  }

  playInteraction() {
    this.currentSound.play(this.mediaPlayer);
  }

  nextInteraction() {
    this.currentIndex += 1;

    // TODO: Change to next LTLS Object
    this.currentSound = this.ltlsObjects[this.currentIndex].media as LtlsSound;
    console.log(this.currentSound);
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
    let msg: string;
    let dur: number;
    if (result) {
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
