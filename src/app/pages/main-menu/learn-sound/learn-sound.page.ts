import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-learn-sound',
  templateUrl: './learn-sound.page.html',
  styleUrls: ['./learn-sound.page.scss'],
})
export class LearnSoundPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  
  public toListen(){
    this.route.navigate(['/sound']);
  }

}
