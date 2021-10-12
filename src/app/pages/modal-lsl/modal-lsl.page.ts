import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-lsl',
  templateUrl: './modal-lsl.page.html',
  styleUrls: ['./modal-lsl.page.scss'],
})
export class ModalLSLPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  } 
    dismiss(){
      this.modalController.dismiss({
        'dismissed': true
      });
    }
}
