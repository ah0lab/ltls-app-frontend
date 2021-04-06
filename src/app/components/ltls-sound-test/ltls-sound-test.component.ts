import { Component, OnInit } from '@angular/core';
import { ResourceLoaderService } from '../../services/resource-loader.service';
import { AlertController } from '@ionic/angular';

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

  constructor(private resource: ResourceLoaderService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.soundName = 'cow';
    this.audio = new Audio();
    this.audio.src = this.resource.returnSoundFile(this.soundName);
    this.audio.load();
    this.wasPlayed = false;
  }

  playSound(){
    this.audio.play();
    this.wasPlayed = true;
  }

   async canHear() {
    const alert = await this.alertController.create({
      header: 'You heard it!',
      message: 'We\'ve recorded this for you to look at later',
      buttons: ['Continue']
    });
    await alert.present();
    this.wasHeard = true;
  }

  async cannotHear(){
    const alert = await this.alertController.create({
      header: 'You couldn\'t hear it!',
      message: 'Here is a tip for next time',
      buttons: ['Continue']
    });
    await alert.present();
    this.wasHeard = false;
  }

}
