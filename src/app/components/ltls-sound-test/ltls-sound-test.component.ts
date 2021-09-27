import { Component, OnInit } from '@angular/core';
import { ResourceLoaderService } from '../../services/resource-loader.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
              public alertController: AlertController, private route: Router) { }

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
    const alert = await this.alertController.create({
      header: 'You heard it!',
      message: 'We\'ve recorded this for you to look at later',
      buttons: ['Continue']
    });
    await alert.present();
    this.wasHeard = true;
    this.route.navigate(['/sound2']);
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
