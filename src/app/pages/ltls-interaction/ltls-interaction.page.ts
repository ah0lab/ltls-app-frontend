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
import { SaveDataService } from '../../services/save-data.service';

@Component({
  selector: 'app-ltls-interaction',
  templateUrl: './ltls-interaction.page.html',
  styleUrls: ['./ltls-interaction.page.scss'],
})
export class LtlsInteractionPage implements OnInit, LtlsInteraction {

  @Input() ltlsObjects: LtlsObject[] = [];
  @Input() randomize = false;
  @Input() mediaPlayer: HTMLMediaElement;

  private currentIndex = 0;

  public currentSound: LtlsSound;
  public isFinalSound = false;

  constructor(private ltlsObjectLoader: LtlsObjectService,
              private alertController: AlertController,
              private toastController: ToastController,
              private modalController: ModalController,
              private dataSaver: SaveDataService,
              private router: Router) { }

  ngOnInit() {
    // Was this component already given a list from the input?
    if (this.ltlsObjects.length === 0) {
      this.ltlsObjectLoader.loadObjects();
      this.ltlsObjectLoader.ltlsObjects.subscribe(sounds => this.ltlsObjects = sounds);
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
    for (const object of this.ltlsObjects) {
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
      // Check if this is our final interaction
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

  /*
   * Displays a strategy tip
   */
  async showStrategy() {
    const modal = await this.modalController.create({
      component: ModalStratPage
    });
    return await modal.present();
  }

  restartInteraction() {
    this.currentSound.wasPlayed = false;
    this.currentSound.wasHeard = false;
  }

  /*
   *  Is called whenever the user selects "CanHear" or "CantHear".
   *  Passing the boolean value true or false for each selection
   *  respectively.
   */
  async wasReceptive(result: boolean) {
    this.currentSound.wasHeard = result;

    // Save data to local storage
    this.dataSaver.saveResult({
      key: this.currentSound.mediaName,
      datePerformed: new Date(),
      wasHeard: this.currentSound.wasHeard
    });

    const msg = 'hearing data saved';
    const dur = 2000;

    if (!result) {
      // Advance to next sound and show a hear better tip
      if (this.isFinalSound) {
        this.endInteraction();
      } else {
        this.nextInteraction();
      }
      await this.showStrategy();
    }

    const toast = await this.toastController.create({
      message: msg,
      duration: dur
    });
    await toast.present();
  }

}
