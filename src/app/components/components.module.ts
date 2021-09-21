import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {LtlsSoundTestComponent} from './ltls-sound-test/ltls-sound-test.component';
import { ViewTipsComponent } from './view-tips/view-tips.component';


@NgModule({
  declarations: [LoginComponent, LtlsSoundTestComponent, ViewTipsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    LtlsSoundTestComponent,
    ViewTipsComponent
  ]
})
export class ComponentsModule { }
