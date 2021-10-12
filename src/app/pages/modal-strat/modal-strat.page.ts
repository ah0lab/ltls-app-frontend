import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-strat',
  templateUrl: './modal-strat.page.html',
  styleUrls: ['./modal-strat.page.scss'],
})
export class ModalStratPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
