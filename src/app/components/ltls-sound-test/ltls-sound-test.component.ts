import { Component, OnInit } from '@angular/core';
import { ResourceLoaderService } from '../../services/resource-loader.service';

@Component({
  selector: 'app-sound',
  templateUrl: './ltls-sound-test.component.html',
  styleUrls: ['./ltls-sound-test.component.scss'],
})
export class SoundComponent implements OnInit {

  audio: any;
  public played: boolean;
  soundFile: string;
  hear: boolean;

  constructor(private resource: ResourceLoaderService) { }

  ngOnInit() {
    this.soundFile = 'cow';
    this.audio = new Audio();
    this.audio.src = this.resource.returnSoundFile(this.soundFile);
    this.audio.load();
    this.played = false;

  }

  playSound(){
    this.audio.play();
    this.played = true;
  }

  canHear(){
    this.hear = true;
  }

  cannotHear(){
    this.hear = false;
  }

}
