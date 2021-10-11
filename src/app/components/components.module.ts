import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {LtlsSoundTestComponent} from './ltls-sound-test/ltls-sound-test.component';


@NgModule({
  declarations: [ LtlsSoundTestComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    LtlsSoundTestComponent
  ]
})
export class ComponentsModule { }
