import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-learn-sounds',
  templateUrl: './learn-sounds.page.html',
  styleUrls: ['./learn-sounds.page.scss'],
})
export class LearnSoundsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoRandomSound() {
    // TODO: Navigate to sound randomizer
  }

  gotoSoundListing() {
    // TODO: Navigate to sound lisitng
  }

  playSoundSet() {
    this.router.navigate(['ltls-interaction']);
  }
}
